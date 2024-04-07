# Makefile

# Development environment
dev:
	@docker compose -f compose.dev.yml up -d

dev-stop:
	@docker compose -f compose.dev.yml down

# Production environment
start:
	@docker compose -f compose.prod.yml up -d

stop:
	@docker compose -f compose.prod.yml down
