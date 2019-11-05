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