CREATE DATABASE greetingsdatabase;
CREATE TABLE greetuser(
    id  SERIAL not Null  PRIMARY KEY,
    username VARCHAR(100) not Null,
    count INT not Null
);

`INSERT  INTO greetusers (username,  count)
VALUES (${name}, ${counter})`;