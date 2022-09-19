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

1. Download the files, which when unzipped will provide you a folder of the files.
2. Open this folder in your IDE (Integrated Development Environment) of your choice. Some options include Visual Studio Code, PyCharm, or a Code/text editor such as Sublime Text or Atom.
3. In the provided terminal within the IDE (If you're using sublime text or Atom, ensure to open a separate terminal and change to the project directory, i.e. `cd ~/Downloads/sdi-full-stack-project-scaffold/server_side` or `cd C:\Users\<Your Username>\Downloads\sdi-full-stack-project-scaffold/server_side`. You will also need to open a terminal in the React-App directory `cd ~/Downloads/sdi-full-stack-project-scaffold/React-app` or `cd C:\Users\<Your Username>\Downloads\sdi-full-stack-project-scaffold/React-app`.
4. Ensure you have nodejs and NPM installed on your computer before proceeding.
5. To install the required dependencies to run the application, run the command `npm install` ; This is downloading all the required dependencies by parsing through the package.json file. **Note: these files should already be pre-installed, based on how we presented this project. But if it isn't, run `npm install` in the terminal.`
6. This application also requires the installation of Docker and a container running Postgres for the database compilation. For further details on how to intstall a docker container visit `https://docs.docker.com/samples/postgresql_service/`
7. After, run `npm start` in both terminals to compile the webpage and run the database, the server should now be running on `localhost:3000` and the database should run on `localhost:5837`

## Topics
* Full stack application development using the following:
* react.js
* react-bootstrap
* Dynamic DOM manipulation
* express
* knex.js
* css styling with styled-components

