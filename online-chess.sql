
create database online_chess_udemy
use online_chess_udemy

-- table user
create table users( id int auto_increment primary key, username varchar(255) unique, email varchar(255) unique, password varchar(255) );

-- table user_info
create table user_info ( user_id int, user_rank ENUM('beginner','intermediate','advanced','expert') default 'beginner', user_points int default 1000, key userID(user_id), CONSTRAINT userID foreign key(user_id) references users(id) on delete cascade );


--- procedure

create database online_chess_udemy
use online_chess_udemy

create table users( id int auto_increment primary key, username varchar(255) unique, email varchar(255) unique, password varchar(255) );


create table user_info ( user_id int, user_rank ENUM('beginner','intermediate','advanced','expert') default 'beginner', user_points int default 1000, key userID(user_id), CONSTRAINT userID foreign key(user_id) references users(id) on delete cascade );
