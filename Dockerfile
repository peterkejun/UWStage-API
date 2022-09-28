FROM node:16.17.1-bullseye-slim AS base

WORKDIR /app

RUN apt-get update && apt-get install -y make

FROM base AS dev

RUN apt-get install -y procps \
    curl \
    gnupg2 \
    ;

# install yarn and node modules
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt-get update && \
    apt-get install -y yarn

ENV TARGET DEV
EXPOSE 8000
CMD ["npm", "run", "start:dev"]
