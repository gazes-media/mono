import { useState, useEffect, useContext } from "react";
import { FicheAnime, genreEnums, getFicheAnime } from "../utils/apiFetcher";
import Shell from "../components/Shell";
import { Helmet } from "react-helmet";
import { useNavigate, useParams } from "react-router-dom";
import { BackgroundImage, Flex, Grid, Paper, em, Text, GridCol, Button, Group, Image, Pagination, Badge } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { chunkify } from "../utils/util";
import { StoreContext } from "../Context/MainContext";
import { logEvent } from "firebase/analytics";
import { analytics } from "../utils/database";
function FicheComponent({ animeId }: { animeId: string }) {
  let [fiche, setFiche] = useState<FicheAnime | null>(null);
  let [page, setPage] = useState<number>(1);
  let [lastEpisode, setLatestEpisode] = useState<number | null>(null);
  let { historyWatched } = useContext(StoreContext);
  let navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
        logEvent(analytics,'page_view',{
           page_title: document.title,
           page_location: location.href,
           page_path: location.pathname
        })
    }, 700);
}, [])
  useEffect(() => {
    (async () => {
      let fiche = await getFicheAnime(parseInt(animeId, 10));
      if(!fiche) return navigate("/");
      logEvent(analytics, 'load_fiche', {
        id: fiche.id,
        title: fiche.title
      });
      setFiche(fiche);
      let latestEpisodeWatched = historyWatched.find(e => e.id == (fiche as FicheAnime).id);
      if (latestEpisodeWatched) {
        setLatestEpisode(latestEpisodeWatched.episode);
      }
    })()
  }, [animeId])
  let isMobile = useMediaQuery(`(max-width: ${em(750)})`);
  if (!fiche) return (<div>Chargement...</div>)

  return (
    <div>
      <Helmet>
        <title>{fiche.title + " - VOSTFR"}</title>
      </Helmet>
      <BackgroundImage src={isMobile ? fiche.url_image : fiche.coverUrl} radius={"xs"}  >
        <Paper bg={"rgba(0,0,0,0.6)"} style={{ padding: 10 }}>
          <div style={{ height: "2rem" }}></div>
          <Flex style={{ height: "100vh" }} >
            <Grid >
              <div style={{ padding: 20, height: "100%" }}>
                <Text size="xl" style={{ color: 'white', fontSize: "1.5rem", fontWeight: "bold", lineHeight: "2rem" }}>
                  {fiche.title}
                </Text>
                <Text size="md" style={{ fontSize: "1rem" }}>
                  Sortie en {fiche.start_date_year}
                </Text>
                {fiche.nb_eps !== "Film" && <Text size="md" style={{ fontSize: "1rem" }}>
                  {fiche.nb_eps + " épisodes"}
                </Text>}
                <Text size="md" style={{ fontSize: "1rem" }}>
                  Type: {fiche.type.replace("m0v1e", "Film")}
                </Text>
                <div style={{ height: 15 }} />
                <Text size="sm" style={{ color: 'white' }}>
                  {isMobile ? fiche.synopsis.substring(0, 200) + "..." : fiche.synopsis}
                </Text>
                <Group right={"xs"} style={{ marginTop: 10 }}>
                  {fiche.genres.map((genre) => (
                    <Badge key={genre} variant="outline" color="blue" style={{ marginRight: 5 }}>{(genreEnums as unknown as any)[genre]}</Badge>
                  ))}
                </Group>
              </div>
              <GridCol span={12} >
                <Group right={"xs"}>
                  <Button radius={"sm"} style={{
                    marginRight: 10,
                  }}
                    onClick={() => { window.location.href = ("/anime/" + fiche?.id + "/episode/1") }}
                  >{lastEpisode ? "Recommencer" : "Commencer"}</Button>
                  {lastEpisode ? <Button radius={"sm"} style={{
                    marginRight: 10,
                  }} onClick={() => { window.location.href = "/anime/" + fiche?.id + "/episode/" + lastEpisode }}>Reprendre ep {lastEpisode}</Button> : null}
                </Group>
              </GridCol>
            </Grid>
          </Flex>
        </Paper>
      </BackgroundImage>
      <Grid align="flex-start" justify="center" style={{
        paddingTop: "20px"
      }}>
        {chunkify(fiche.episodes,20)[page-1].map((episode) => (
          <Paper key={episode.num} onClick={() => navigate("/anime/" + fiche?.id + "/episode/" + episode.num)} style={{ height: "100%", margin: 10 }} radius="sm" >
            <Image src={episode.url_image} radius="sm" w={"23rem"} h={"100%"} />
            <Text size="sm" truncate="end" style={{ color: 'white', fontSize: "0.8rem", fontWeight: "bold", lineHeight: "2rem" }} bg={"rgba(0,0,0,0.5)"}>
              Eps {episode.num} - {episode.time}
            </Text>
          </Paper>
        ))}
      </Grid>
      <Pagination total={chunkify(fiche.episodes,20).length} value={page} onChange={setPage} style={{ marginTop: 20, marginBottom: 20 }} />
    </div>
  )
}

export default function Fiche() {
  const { id } = useParams()
  if (!id) return (<div>404</div>)
  return (
    <Shell currentRoute={`/anime/${id}`} child={<FicheComponent animeId={id} />} />
  )
}
