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

-- Instructions to create app database and tables
CREATE DATABASE todo_app;

USE todo_app;

CREATE TABLE user (username VARCHAR(15) NOT NULL,
first_name VARCHAR(50),
last_name VARCHAR(50),
email_address VARCHAR(100),
PRIMARY KEY(username));

CREATE TABLE task (task_id CHAR(32),
task_name VARCHAR(160) NOT NULL,
due_by DATE,
done BOOLEAN DEFAULT 0,
date_added DATE,
date_completed DATE,
owner_id VARCHAR(15),
PRIMARY KEY(task_id),
FOREIGN KEY (owner_id) REFERENCES user(username));

-- change task_id CHAR to be 36
ALTER TABLE task MODIFY task_id char(36);

LOAD DATA LOCAL INFILE '/Users/annbarr/desktop/DevProjects/ninetyeight_and_threequarters_percent/user_data/user_data_TSV.tsv' INTO TABLE user;

SELECT * FROM user;

LOAD DATA LOCAL INFILE '/Users/annbarr/desktop/DevProjects/ninetyeight_and_threequarters_percent/user_data/task_data_TSV.tsv' INTO TABLE task;
-- this is skipping all but the last item which must be to do with the duplication of the primary key. Will try putting quotes around PK in TSV file.

LOAD DATA LOCAL INFILE '/Users/annbarr/desktop/DevProjects/ninetyeight_and_threequarters_percent/tabledata/task_data_TSV.tsv' INTO TABLE task;
-- Warning 1452


INSERT INTO task
VALUES ('b065ea0d-f6b4-46bd-a79c-e84469d8dab6', 'Lizzie’s first task','2019-12-31', 0, '2019-09-28', '\N', 'lizzieb');
-- this works but something in TSV file not putting data in correct format

-- try inserting multiple rows
INSERT INTO task (task_id, task_name, due_by, done, date_added, date_completed, owner_id)
VALUES ('ca0dd457-f028-496a-86d5-353c3bd5ffee', "Ann’s first task", '2019-12-15', 0, '2019-07-16', '\N', 'annb17'),
('d8dad374-4ecb-4a0f-a37d-ece590da918a', "Izzy’s no 1 task", '2019-07-06', 1, '2019-07-04', '2019-07-05', 'user123'),
('0928265d-9428-4fc7-a950-f14e68512e40', "Carol’s shopping job", '2019-11-23', 0, '2019-11-12', '\N', 'iamauser'),
('248b8a62-45b7-41d4-9ac1-4d400e2de163', 'Homework Lizzie', '2019-11-16', 0, '2019-10-16', '\N', 'lizzieb'),
('81fcaf1a-a3b5-42eb-bd1d-b6620b62ae72', 'Learn databases',	'2019-11-30', 0, '2019-10-31', '\N', 'annb17'),
('a66d9f48-523e-4fbe-b069-6c2303e5bb19', 'Take guinea pig to vet', '2019-10-05', 1,	'2019-09-29', '2019-10-05',	'user123'),
('dcc433e4-4255-47db-829d-06d656bf13e2', 'Shopping','2019-11-12', 1, '2019-11-11', '2019-11-12', 'iamauser'),
('293ef564-b6bd-480c-a7e3-c9c7231582df', 'Clean windows', '2019-9-30', 0, '2019-9-23', '\N', 'annb17');

SHOW CREATE TABLE task;
-- shows structure of table - PK, FK etc.

SELECT * FROM task WHERE owner_id = "iamauser";
-- shows all tasks owned by an owner_id

SELECT A1.first_name user, SUM(A2.done) task
FROM user A1, task A2
WHERE A1.username = A2.owner_id
GROUP BY A1.first_name;

SELECT task_name, user.first_name 
FROM task 
INNER JOIN user 
ON task.owner_id = user.username;

SELECT user.first_name user, SUM(task.done) completed
FROM user, task
WHERE user.username = task.owner_id
GROUP BY user.first_name;

SELECT A1.Store_Name STORE, SUM(A2.Sales) SALES
FROM Geography A1
INNER JOIN Store_Information A2
ON A1.Store_Name = A2.Store_Name
GROUP BY A1.Store_Name;


QUIT;

CREATE TABLE acme_user (username VARCHAR(30), 
firstName VARCHAR(100), 
lastName VARCHAR(100), 
PRIMARY KEY(username));