## How to use the boilerplate
(This contains a beginner friendly guide on using the boilerplate full stack project!)
This documentation will walk you through the ins and outs of running full stack skeleton project for your next project!

Tech Stack: React, Sass, Express, Node, Sequelize, Postgres

### :one: Clone the repository

`cd` into the directory you want to make the project and clone the repo

`git clone https://github.com/breindy/fullstack-boilerplate`

You may now use this directory for your next projects. You are free to rename the directory to your desired project name by running if you are in the current file.

`mv old-name new-name` 


### :two: Install Node dependencies

To get both frontend client and backend server to work, install the node_modules dependency for both directories.

`cd client` and run

`npm install`

`cd ..` 

`cd server` and run

`npm install` 
to install both client and server dependencies to be able to get the project working on your local computer.

###  :three: Setting up database locally

The SQL database used in this boilerplate uses Postgresql which is one of the most common mysql database.

If you don't have [postgres](https://www.postgresql.org/download/) installed in your computer please install it now before reading on. 

You can run postgres through a GUI (General User Interface) however the following steps will walk you through creating a database on your local host computer so data can be stored in your computer for development, or testing.

However, I recommend using [Postico](https://eggerapps.at/postico/) for MacOS and [pgAdmin4](hhttps://www.pgadmin.org/download/) for Windows. When downloading Postgres on Windows, you get the option to download pgAdmin with Postgres so just click on the option to install Postgres with pgAdmin.

Once **Postgres** has been installed, you want to create a database for your project to run on.
In your terminal, run `psql postgresql`. This initiates postgres on the command line where you can run your commands to run sql queries and more. Your terminal should now look like this

`postgres=#           `

If it prompts you for a password, enter the password that you setup when installing postgres.

Run `CREATE DATABASE dbname_development` or `CREATE DATABASE dbname_test` if you choose to make a database for development or testing. 

Now you want to create a user/role that has access and rights to create tables, and relations to the database other than postgres.

Run `CREATE USER username_dbuser WITH ENCRYPTED PASSWORD 'password';`

You want to grant access and privilege to the user/role that you just created so run
`GRANT ALL PRIVILEGES ON dbname_development TO username_dbuser;`

:warning: **Don't forget these credentials** as we will use these credentials for your config file to initialize Sequelize access to your database!

###  :four: Setting up config file for Sequelize

Sequelize is an Database ORM (an object relational mapper) that allows you to write sql queries using javascript or any other object-oriented paradigm or programming language. It makes creating complicated queries and data management easier for the long haul of your project which is why we are utilizing Sequelize to navigate through our postgres database to create, delete, update information.

Before starting we want to access running sequelize commands to create models, associations, initiate migrations, and seeders **through the command line**.

Run `npm i -g sequelize-cli` to download sequelize-cli (sequelize command line interface) globally on your computer. This will help in the next steps to initialize sequelize and migrate our models to the newly created database.

Right now, we want to take care of setting up our config file which tells sequelize the settings and information of the database we want to work with for the project.

Make sure you are in the `server` folder and make a directory called config to store the config file.
`mkdir config`