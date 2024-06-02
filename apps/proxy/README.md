# Proxy

## Purpose

The purpose of the proxy in this project is to act as an intermediary between the client and the server. It receives requests from the client and forwards them to the server, and then returns the server's response back to the client.

The proxy serves several purposes, including:

- **Load balancing**: The proxy can distribute incoming requests across multiple servers to ensure efficient resource utilization and improve performance.
- **Caching**: The proxy can store responses from the server and serve them directly to clients, reducing the load on the server and improving response times.
- **Security**: The proxy can act as a firewall, filtering and blocking malicious requests, protecting the server from potential attacks.

In this specific project, the proxy is deployed using Docker, which allows for easy containerization and deployment. The provided code demonstrates how to start the proxy using Docker or Docker Compose, specifying the required environment variables such as the port number and the proxy URL.

## Setup

Before you start, you must provide the required environment variables in a `.env` file.

Before you start you must provide that required ENV variable :

FILE `.env`

```bash
PORT=xxxx
PROXY_URL=http://localhost:xxxx # In case you use an hosted server you must write the whole hosted URL
```

## Starting

### With Docker

```bash
docker run -d -p $PORT:$PORT -e PORT=$PORT -e PROXY_URL=$PROXY_URL ghcr.io/gazes-media/mono-proxy:latest
```

### With Docker Compose

```yaml
version: '3'
services:
    proxy:
        image: ghcr.io/gazes-media/mono-proxy:latest
        ports:
            - "${PORT}:${PORT}"
        environment:
            - PORT=${PORT}
            - PROXY_URL=${PROXY_URL}
```

