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
    medication_frequency varchar(60) NOT NULL,
    reminder_set BOOLEAN NOT NULL,
    reminder_notice varchar(60) NOT NULL,
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

CREATE TYPE assistance_need AS ENUM ('fall', 'fire', 'medical', 'other');

CREATE TABLE panic_button(
    panic_id SERIAL PRIMARY KEY,
    "assistance_need" assistance_need NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    PRIMARY KEY(panic_id),
    CONSTRAINT "fk_panic_button.user_email"
        FOREIGN KEY ("user_email")
        REFERENCES "user_profile"("user_email")
);

CREATE TABLE reminder_set(
    reminder_id SERIAL PRIMARY KEY,
    reminder_name varchar(60) NOT NULL,
    reminder_time varchar(60) NOT NULL,
    reminder_date varchar(60) NOT NULL,
    reminder_set BOOLEAN NOT NULL,
    reminder_notice varchar(60) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    PRIMARY KEY(reminder_id),
    CONSTRAINT "fk_reminder_set.user_email"
        FOREIGN KEY ("user_email")
        REFERENCES "user_profile"("user_email")
);

INSER INTO user_profile VALUES ('');

-- Down

DROP TABLE user_profile;
DROP TABLE medication;
DROP TABLE nextOfKin;
DROP TABLE panic_button;
DROP TABLE reminder_set;

-- drop database if exists aal_db;
