mysql -u admin -p -h tech-returners-instance.csy3ttwcfyhy.eu-west-2.rds.amazonaws.com

SHOW DATABASES;
-- shows list of all databases

USE acme_inc;
-- USE to pick database to query

SHOW TABLES;
-- show list of tables in the database

SELECT * FROM user;
-- retrieve all columns from table named 'user'

INSERT INTO user
VALUES ('lizzieb', 'Lizzie', 'Barr');
-- adds Values in order listed into columns in table named 'user'
-- https://dev.mysql.com/doc/refman/8.0/en/loading-tables.html

LOAD DATA LOCAL INFILE '/Users/annbarr/desktop/DevProjects/ninetyeight_and_threequarters_percent/users.txt' INTO TABLE user;
-- gets tab separated data from a text file and adds into table named 'user'. Use PWD to get the path. \N in .txt file adds Null to table column
-- this didn't work correctly when .txt file created in VSC
-- this works is create a TSV from Numbers and save it with a .txt extension

LOAD DATA LOCAL INFILE '/Users/annbarr/desktop/DevProjects/ninetyeight_and_threequarters_percent/users.txt' INTO TABLE user LINES TERMINATED BY '\r';
-- made no difference to TSV loss




CREATE TABLE user (username VARCHAR(30), 
firstName VARCHAR(100), 
lastName VARCHAR(100), 
PRIMARY KEY(username));