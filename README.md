## Description

UWStage is a web platform for undergrad and grad students to rate their internship experiences at host companies and share their stories. 

## Local Development
Docker is used to eliminate dependency issues during development.

#### Database
The NestJS API uses TypeORM technology to abstract database communications. We can use any RDBMS as long as supported by TypeORM. By default, 
we use MySQL for development. 

A MySQL docker image with a persistent docker volume is used to simplify database setup.

#### Networking
The NestJS API and MySQL docker containers share a docker network, allowing them to network easily. 

#### Code Files
Code files in the project directory is mounted to the API docker container as a volume. This way, as long as the docker container is running,
any changes to your project directory will be reflected in the docker container, and will trigger an incremental compilation.

#### Spinning It Up
To spin it up,
```bash
make up
```
Upon first run, this will pull the docker image for mysql, and build the images for the API. 
It will then spin up a container for the API, and a container for MySQL.

#### Makefile
For more build targets and tools, check `Makefile`.
