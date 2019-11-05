## Database Schema

# In SQLite make sure to include SQLite3

- save information about their pets. For each pet they'd like to record:
    - name
    - species (dog, cat, iguana, etc.)
    - breed (optional, if any)
    - food (what does it eat?)
    - weight (as a floating number)
    - weightUnit (optional, lb, kg)
    - see a list of their pets
    - update their pets' information
    - mark a pet as "owned" (true/false)

- Started an express JS API
    - npm packages installed: express, helmet, knex, sqlite3 and nodemon as dev dependencies

    - go to github and create an empty repo w/o anything
        - follow directions in the empty repo
            - git add remote `<url from github>`
    - run `git init`
    - run `npm init -y`
    - run `npx gitignore node`
    - run `npm i express helmet knex sqlite3`
    - run `npm i nodemon -D`

Migrations are a way to record changes to the database schema.

**It's like got, for the database straucture**

**EVERY CHANGE TO THE DATABASE SCHEMA (STRUCTURE) MUST BE DONE WITH A NEW MIGRATION**

## MIGRATIONS

-1 Initialize Knex for our project: `knex init`

-2 Optionally install knex globally on your system: `npm i -g knex` / `yarn global add knex`

-3 Create a migration: `npx knex migrate: make <name>`
    -3.1 Use the migrations to declare the changes we plan to make to the schema.
    -3.2 copy from the documentation and RETURN!!!!!!! In the migration file exports.up
- Run a migration: `npx knex migrate :up`
- Undo the last migration: `npx migrate: down`
- Update database to latest changes/migrations: `npm knex migrate: latest` <== multiple new migrations
- Undo multiple migrations that ran together: `npx knex migrate: rollback`