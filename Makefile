.PHONY: up start down destroy stop restart logs

ENV ?= dev
COMPOSE_FILE ?= compose.${ENV}.yml

help:
	@echo "Usage make <docker-compose command> env=<dev|prod>"

up:
	docker-compose -f ${COMPOSE_FILE} up -d

start:
	docker-compose -f ${COMPOSE_FILE} start

down:
	docker-compose -f ${COMPOSE_FILE} down

destroy:
	docker-compose -f $(COMPOSE_FILE) down -v

stop:
	docker-compose -f ${COMPOSE_FILE} stop

restart:
	@make stop
	@make up

logs:
	docker-compose -f compose.$(env).yml logs --tail=100
