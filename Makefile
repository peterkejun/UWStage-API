build_modules:
	docker-compose run api yarn install

up:
	docker-compose up

down:
	docker-compose down

down_api:
	docker-compose stop api

health:
	curl -X GET http://localhost:8000

migrate:
	docker-compose run api bash bin/migrate.sh $(name)

get:
	curl -X GET http://localhost:8000$(path)
