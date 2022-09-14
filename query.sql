create database joes_app_node;
use joes_app_node;

create table users(
ID int auto_increment primary key,
NAME varchar(150),
AGE int,
CITY varchar(50)
);

select * from users;

insert into users (NAME,AGE,CITY) values
('Ram Kumar',25,'Salem'),
('Sam Kumar',22,'Namakkal'),
('Aaryan',25,'Salem'),
('Joes',30,'Chenni')
;