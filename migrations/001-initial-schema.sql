--  CREATE DATABASE aal-db;

-- Up

CREATE TABLE user_profile(
    user_email VARCHAR(255) PRIMARY KEY,
    first_name varchar(60) NOT NULL,
    last_name varchar(60) NOT NULL,
    telephone_no varchar(20) NOT NULL,
)

CREATE TABLE medication(
    user_email FOREIGN KEY REFERENCES user_profile(user_email),
    medication_id SERIAL PRIMARY KEY,
    medication_name varchar(60) NOT NULL,
    medication_dosage varchar(60) NOT NULL,
    medication_frequency varchar(60) NOT NULL,
    reminder_set BOOLEAN NOT NULL,
    reminder_notice varchar(60) NOT NULL
);

CREATE TABLE nextOfKin(
    user_email FOREIGN KEY REFERENCES user_profile(user_email),
    nextOfKin_email VARCHAR(255) PRIMARY KEY,
    first_name varchar(60) NOT NULL,
    last_name varchar(60) NOT NULL,
    telephone_no varchar(20) NOT NULL
);

CREATE TYPE assistance_need AS ENUM('fall', 'fire', 'medical', 'other');

CREATE TABLE panic_button(
    panic_id SERIAL PRIMARY KEY,
    user_email FOREIGN KEY REFERENCES user_profile(user_email),
    nextOfKin_Email FOREIGN KEY REFERENCES nextOfKin(nextOfKin_email),
    assistance_need assistance_need NOT NULL
);

CREATE TABLE reminder_set(
    user_email FOREIGN KEY REFERENCES user_profile(user_email),
    reminder_id SERIAL PRIMARY KEY,
    reminder_name varchar(60) NOT NULL,
    reminder_time varchar(60) NOT NULL,
    reminder_date varchar(60) NOT NULL,
    reminder_set BOOLEAN NOT NULL,
    reminder_notice varchar(60) NOT NULL
);

-- Down

DROP TABLE user_profile;
DROP TABLE medication;
DROP TABLE nextOfKin;
DROP TABLE panic_button;
DROP TABLE reminder_set;

-- drop database if exists aal_db;
