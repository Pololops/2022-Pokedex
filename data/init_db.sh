#!/bin/bash

echo 🔄IMPORTING COLLECTION

psql -h postgres -U $POSTGRES_USER -d $POSTGRES_DB -a -f /docker-entrypoint-initdb.d/import_data.sql

echo ✅DONE