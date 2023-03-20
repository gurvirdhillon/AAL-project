-- if exists DROP DATABASE aal_db;

--  CREATE DATABASE aal_db;

-- Up

CREATE TABLE user_profile(
    user_email VARCHAR(255),
    first_name varchar(60) NOT NULL,
    last_name varchar(60) NOT NULL,
    telephone_no varchar(20) NOT NULL,
    PRIMARY KEY(user_email)
);

CREATE TABLE medication(
    medication_id SERIAL,
    medication_name varchar(60) NOT NULL,
    medication_dosage varchar(60) NOT NULL,
    medication_strength varchar(60) NOT NULL,
    medication_time TIME NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    PRIMARY KEY(medication_id),
    CONSTRAINT "fk_medication.user_email"
        FOREIGN KEY ("user_email")
        REFERENCES "user_profile"("user_email")
);

CREATE TABLE nextOfKin(
    nextOfKin_email VARCHAR(255),
    first_name varchar(60) NOT NULL,
    last_name varchar(60) NOT NULL,
    telephone_no varchar(20) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    PRIMARY KEY(nextOfKin_email),
    CONSTRAINT "fk_nextOfKin.user_email"
        FOREIGN KEY ("user_email")
        REFERENCES "user_profile"("user_email")
);

CREATE TABLE reminder(
    reminder_id SERIAL,
    reminder_desc varchar(60) NOT NULL,
    reminder_date DATE NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    PRIMARY KEY(reminder_id),
    CONSTRAINT "fk_reminder_set.user_email"
        FOREIGN KEY ("user_email")
        REFERENCES "user_profile"("user_email")
);

CREATE TABLE next_of_kin(
    next_of_kin_id SERIAL PRIMARY KEY,
    next_of_kin_name varchar(60) NOT NULL,
    next_of_kin_lname varchar(60) NOT NULL,
    next_of_kin_phone varchar(20) NOT NULL,
    next_of_kin_relation varchar(20) NOT NULL
);

-- Down

DROP TABLE user_profile;
DROP TABLE medication;
DROP TABLE nextOfKin;
DROP TABLE reminder_set;

-- drop database if exists aal_db;
