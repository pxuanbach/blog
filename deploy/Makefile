COMPOSE_CMD := $(shell if command -v docker-compose > /dev/null; then echo "docker-compose"; \
                elif docker compose version > /dev/null 2>&1; then echo "docker compose"; \
                else echo "none"; fi)

service := ''

up:
	$(COMPOSE_CMD) up -d $(service)

pull:
	$(COMPOSE_CMD) pull $(service)

down:
	$(COMPOSE_CMD) down $(service)

downv:
	$(COMPOSE_CMD) down -v $(service)

remove:
	$(COMPOSE_CMD) rm -fsv $(service)
