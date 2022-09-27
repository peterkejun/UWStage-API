FROM node:16.17.1-bullseye-slim AS base

WORKDIR /app

RUN apt-get update && apt-get install -y make

FROM base AS dev

RUN apt-get install -y procps

ENV TARGET DEV
EXPOSE 8000
CMD ["npm", "run", "start:dev"]
