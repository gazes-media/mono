package internal

import (
	"bufio"
	"io"
	"net/http"
	"net/url"
	"os"
	"strings"
)

func proxyM3U8(w http.ResponseWriter, body io.Reader) {
	scanner := bufio.NewScanner(body)
	for scanner.Scan() {
		line := scanner.Text()

		if strings.HasPrefix(line, "http") {
			proxiedURL := proxyURL(line)
			io.WriteString(w, proxiedURL+"\n")
		} else {
			io.WriteString(w, line+"\n")
		}
	}

	if err := scanner.Err(); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}

func proxyURL(urlToProxy string) string {
	return os.Getenv("PROXY_URL") + "/?url=" + url.QueryEscape(urlToProxy)
}
