# Team DDDAM Gif Search Engine / Machine 
This project is a FULL STACK CRUD App. Allows users to search Giphy's api and pull in gifs of a certain search parameter. Favorite each or any gif that is appearing on the DOM. Set categories to each favorited gif. Allows the user to have the Favorited gifs shown on a favorites page as well as to categorize them. The views of the categories range up and down the page so to help them differentiate from one another.

# Built With
React / React - Redux /
JSON: axios, dotenv, express, material-UI, react-router-dom, react-scripts, redux-saga

# Getting Started 
npm install, 
npm run server, 
npm run client, 

SEE SQL file for DATABASE installation / setup. Thanks!

Once you have set up the Database and are on the localhost:/3000 you should be able to start interacting with the web app.

# Prerequisites 

Node.js

# Installing 
npm install, 
npm run server, 
npm run client, 

SEE SQL file for DATABASE installation / setup. Thanks!

#Screen Shot 
-- WILL LEARN HOW TO DO THIS... -- PLEASE ... 

# Completed Features 
User to be able to Search for a gif type / tag ex. cat, orca..
User to be able to Favorite a gif to bring to the favorites page.
User to be able to Categorize the favorite results into categories. 
User to be able to only have one of the favorited Gifs in their favorites.
Admin from Code to be able to make new categories in their SQL file and make that category usable. 

# Next Steps 
Would like to get the styling more than what is currently on the page. 

# Deployment 

Not yet ready to host on Heroku.

# Authors
Declan 
David
Dustin
Alex
Miles

#Acknowledgement
Thanks to Giphy and to our instructors for helping us along.

------------------------------------------------------------------------------------------------------------------
# Giphy Search and Favorites

This week you will be building a Giphy searching and favoriting application which allows the user to save images and sort them into categories.

In this project you will need to utilize React, Redux, Sagas and integrate them with a 3rd party API....all in a group project!

## Team Setup
Do not clone this repository. Instead, have one person download the zip, extract the contents, `git init`, `git add .`, `git commit -m "initial commit - base project"` and add your remote. Make your team collaborators. Have them clone directly from the person who did the setup, not fork.


## Create Database and Tables

See the `database.sql` file for database setup and details. It offers some of the SQL to get you started but you'll need to set up your tables and the relationships between them. 


## Development Setup Instructions

* Run `npm install`
* Start postgres if not running already by using `brew services start postgresql`
* Run `npm run server` to start the server
* Run `npm run client` to start the client
* Navigate to `localhost:3000`


## Base Features

You will need 2 views for the Base Features. You should put some thought into the UI and how to style it.


### Search View

- Allow a user to enter a search string and submit a search request.
- Query the `Giphy API Search Endpoint` with the given search string FROM THE SERVER.
- Display the results on the DOM.
- Allow a user to Favorite any of the result images. You'll need to think about what information to save to your own database. Generally you only store the minimum needed to show this image again on the Favorites view.


### Favorites View

- Allow a user to see all of the Giphy images they have Favorited. The actual images need to appear on the DOM.
- Allow a user to set a category for a favorite image.
    - Each favorite image can only have 1 category at a time.
    - The category needs to be one of the categories in the database.


## Existing Routes

You are given two router modules on the server with stubs for the routes you may need.

- `GET /api/category` (complete)
    - returns a list of all categories from the table ordered by name. You may test it if your server is running: [http://localhost:5000/api/category](http://localhost:5000/api/category)

- `POST /api/favorite` (incomplete)
    - for adding a new favorite image. You'll need to think about what is needed. Does it need a category?

- `PUT /api/favorite` (incomplete)
    - for setting a category on an image. It expects both a query parameter and a data body. Feel free to change it.


## Stretch Features

1. Allow favorites to be removed/unfavorited
2. Allow for a favorite to have many categories
3. Implement the pagination feature of the Giphy search results
4. Add another view that allows a user to manage (create, edit, delete) categories

