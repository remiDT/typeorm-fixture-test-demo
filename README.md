# typeorm-fixtures-test-demo

the [typeorm-fixtures-test](https://github.com/remiDT/typeorm-fixture-test) package works with PostgreSQL MySQL and SQLite.  
If you're using an SQlite database the only thing you need to do is configuring the .env like in the .env.sqlite example.


this repository is a step by step demo of typeorm-fixtures-test with a postgres database, if you're a Mysql it works nearly the same way.

### 1 - clone this repository and run
```
npm install
```

### 2 - the .env file is already configured
You have some sqlite and mysql env example files

### 3 - the fixture.config.json is already configured
The test fixtures are located in fixtures/dataFixtures

### 4 - create postgres user with superuser permissions and the test database.
```
create user testuser superuser encrypted password 'password';
create database tft owner testuser
```

### 5 - you can run the test
```
npm run test
```

