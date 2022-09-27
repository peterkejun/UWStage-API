#!/bin/bash

echo "Generating migration with name $1"
npm run migration:generate --name=$1
npm run migration:run
