#!/bin/bash
mongo
use pokemon
db.createcollection('pokedex')
mongoimport --db=pokemon --collection=pokedex --drop --file=data/data.json