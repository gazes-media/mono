package main

import (
	"log"
	"net/http"
	"os"

	"github.com/trail-l31/gazes-proxy/internal"
)

var port string
var url string

func init() {
	if port = os.Getenv("PORT"); port == "" {
		log.Fatal("Missing env variable 'PORT'")
	}

	if url = os.Getenv("PROXY_URL"); url == "" {
		log.Fatal("Missing env variable 'PROXY_URL'")
	}
}

func main() {
	http.HandleFunc("/", internal.ProxyHandler)

	log.Fatal(http.ListenAndServe(":"+port, nil))
}
