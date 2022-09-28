up:
	docker-compose up

down:
	docker-compose down

health:
	curl -X GET http://localhost:8000

migrate:
	docker-compose run api bash bin/migrate.sh $(name)

get:
	curl -X GET http://localhost:8000$(path)
