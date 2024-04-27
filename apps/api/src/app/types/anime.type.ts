import { Static, Type } from "@sinclair/typebox";

export const AnimeParamsSchema = Type.Object({
    id: Type.Integer(),
});

export type AnimeParams = Static<typeof AnimeParamsSchema>;

export const AnimeSearchQueryString = Type.Object({
    title: Type.Optional(Type.String()),
    year: Type.Optional(Type.Integer()),
    genres: Type.Optional(Type.String()),
    status: Type.Optional(Type.String()),
    format: Type.Optional(Type.String()),
    episodes: Type.Optional(Type.Integer()),
    page: Type.Optional(Type.Integer()),
});

export type AnimeSearchQueryString = Static<typeof AnimeSearchQueryString>;

export const AnimeEpisodeParams = Type.Object({
    id: Type.Integer(),
    episode: Type.Integer(),
});

export type AnimeEpisodeParams = Static<typeof AnimeEpisodeParams>;
