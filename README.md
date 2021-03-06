# Store CRUD App
## Description

This is a CRUD app builded with NestJs Framework. In this app you can Create, Read, Update and Delete records for:
* Employees
* Jobs
* Sales
* Products
* Categories
* Promotions Discount Codes

## Installation

```bash
$ npm install
```

You must create a .env file with Data Base Configuration as below:

```
DB_HOST = YOUR_DB_HOST
DB_PORT = YOUR_DB_PORT
DB_USERNAME = YOUR_DB_USERNAME
DB_PASSWORD = YOUR_DB_PASSWORD
DB_NAME = YOUR_DB_NAME
```

**Note:** The .env file should be create at root path.

## Quick Instalation

You can create an .env file with the config bellow

```
DB_HOST = crud-app-postgres
DB_PORT = 5432
DB_USERNAME = postgres
DB_PASSWORD = postgres
DB_NAME = crudapp
```

and run `docker compose up`

**Note:** The .env file should be create at root path.

**Note:** You can change the default db and ports on docker-compose.yml and .env file

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Stay in touch

- Author - [Angel Antonio Barco](https://drakeredfield.github.io/)
- Social - [LinkedIn](https://www.linkedin.com/in/angel-antonio-barco-alfaro-b36b6316a/)
