#!/bin/bash

if [ -z $1 ]; 
then
    printf "Provide a name of the migration!\n\n"
    printf "\tmake migrate name=MyMigration\n\n"
    exit 1
fi
echo "Generating migration with name $1"
npm run migration:generate --name=$1
npm run migration:run
