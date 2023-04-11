# DFAC Dash

## Purpose

The purpose of this application is to allow member of the DOD to be able to order food options from the local DFAC of their choice in an effort to promote healthy eating, as well as bolster financial health by promoting the provided eating resources for use with the BAS. 

## Features

1. Sort by Branch, Base, and DFAC location
2. Be able to build an order for pick up at your local DFAC
3. Submit the order to see an estimated time window
4. Find items by time of day selection and sort by dietary restrictions
5. Base healthy eating decisions on the commonly accepted Green, Yellow, Red presentation

## Running the Project

Spinning up your own container and database for the first time
Pull latest postgres image for docker

docker pull postgres
Make a docker volume directory for postgres

mkdir -p $HOME/docker/volumes/postgres
Spin up the postgres container

 docker run --rm --name pg-docker -e POSTGRES_PASSWORD=docker -d -p 5432:5432 -v $HOME/docker/volumes/postgres:/var/lib/postgresql/data postgres
Shows list of containers, you will need the container ID for the subsequent command

docker ps -a
Open a bash command line with the docker container

docker exec -it <PSQL-Container-ID> bash
Open command line inside psql with the username postgres

psql -U postgres
Create the database for this project

CREATE DATABASE miltrackdb;
Select the database that was just created

\c dfac_dash
Now you are in the dfac_dash database

To initialize the database, run the following commands in the /back-end directory using an ordinary terminal:

npx knex migrate:latest
npx knex seed:run
Starting up the application
Run command to start your react client on localhost:3000.

cd client
npm start
Run command to start your back-end server on localhost:30001.

cd server
npm start

## Topics
* Full stack application development using the following:
* react.js
* react-bootstrap
* Dynamic DOM manipulation
* express
* knex.js
* css styling with styled-components

