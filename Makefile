.PHONY: up start down destroy stop restart logs

help:
	@echo "Usage make <docker-compose command> env=<dev|prod>"

up:
	docker-compose -f compose.$(env).yml up -d

start:
	docker-compose -f compose.$(env).yml start

down:
	docker-compose -f compose.$(env).yml down

destroy:
	docker-compose -f compose.$(env).yml down -v

stop:
	docker-compose -f compose.$(env).yml stop

restart:
	@make stop
	@make up

logs:
	docker-compose -f compose.$(env).yml logs --tail=100
