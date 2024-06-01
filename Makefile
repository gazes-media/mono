ENVIRONMENT ?= dev
DOCKER_COMPOSE_FILE ?= compose.$(ENVIRONMENT).yml

default: up

up: DOCKER_COMPOSE_COMMAND = up -d
start: DOCKER_COMPOSE_COMMAND = start
down: DOCKER_COMPOSE_COMMAND = down
destroy: DOCKER_COMPOSE_COMMAND = down -v
stop: DOCKER_COMPOSE_COMMAND = stop
logs: DOCKER_COMPOSE_COMMAND = logs --tail=100

up start down destroy stop logs:
	docker-compose -f $(DOCKER_COMPOSE_FILE) $(DOCKER_COMPOSE_COMMAND)

clean:
	docker stop $(shell docker ps -aq) || true
	docker rm $(shell docker ps -aq) || true
	docker volume rm $(shell docker volume ls -q) || true
	docker image rm $(shell docker image ls -q) || true

restart:
	$(MAKE) stop
	$(MAKE) up

help:
	@echo "Available commands:"
	@echo "up       - Start all services in detached mode"
	@echo "start    - Start services"
	@echo "down     - Stop and remove resources"
	@echo "destroy  - Stop and remove resources, including volumes"
	@echo "stop     - Stop services"
	@echo "restart  - Restart services"
	@echo "logs     - View output from services"
	@echo "help     - Show this help message"
	@echo "clean    - Remove all resources"
