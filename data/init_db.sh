#!/bin/bash

echo 🔄IMPORTING COLLECTION

mongoimport --host=mongo --db=pokemon --collection=pokedex --type=json --file=/docker-entrypoint-initdb.d/import_data.json

echo ✅DONE