-- if exists DROP DATABASE aal_db;

--  CREATE DATABASE aal_db;

-- Up

CREATE TABLE users(
    user_id INTEGER PRIMARY KEY,
    fitbit_id VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    access_token VARCHAR(255) NOT NULL,
    refresh_token VARCHAR(255) NOT NULL
);

CREATE TABLE steps(
    steps_id INTEGER PRIMARY KEY,
    user_id INTEGER NOT NULL,
    date DATE NOT NULL,
    steps INTEGER NOT NULL,
    CONSTRAINT "fk_steps.user_id"
    FOREIGN KEY ("user_id")
    REFERENCES users("user_id")
);

CREATE TABLE distance(
    distance_id INTEGER PRIMARY KEY,
    user_id INTEGER NOT NULL,
    date DATE NOT NULL,
    distance FLOAT NOT NULL,
    CONSTRAINT "fk_distance.user_id"
    FOREIGN KEY ("user_id")
    REFERENCES users("user_id")
);

CREATE TABLE calories(
    calories_id INTEGER PRIMARY KEY,
    user_id INTEGER NOT NULL,
    date DATE NOT NULL,
    calories INTEGER NOT NULL,
    CONSTRAINT "fk_calories.user_id"
    FOREIGN KEY ("user_id")
    REFERENCES users("user_id")
);

CREATE TABLE activity(
    activity_id INTEGER PRIMARY KEY,
    user_id INTEGER NOT NULL,
    date DATE NOT NULL,
    activity_minutes INTEGER NOT NULL,
    CONSTRAINT "fk_activity.user_id"
    FOREIGN KEY ("user_id")
    REFERENCES users("user_id")
);

CREATE TABLE heartRate(
    heartRate_id INTEGER PRIMARY KEY,
    user_id INTEGER NOT NULL,
    date DATE NOT NULL,
    heartRate INTEGER NOT NULL,
    CONSTRAINT "fk_heartRate.user_id"
    FOREIGN KEY ("user_id")
    REFERENCES users("user_id")
);

CREATE TABLE sleep(
    sleep_id INTEGER PRIMARY KEY,
    user_id INTEGER NOT NULL,
    date DATE NOT NULL,
    sleep_minutes INTEGER NOT NULL
);

CREATE TABLE reminder(
    reminder_id UUID PRIMARY KEY,
    date DATE NOT NULL,
    time TIME NOT NULL,
    reminder VARCHAR(255) NOT NULL
);

CREATE TABLE medication(
    medication_id UUID PRIMARY KEY,
    medication_name VARCHAR(255) NOT NULL,
    medication_amount VARCHAR(255) NOT NULL,
    consumption varchar(10),
    consumption_dosage INTEGER,
    consumption_metric VARCHAR(10),
    consumption_time TIME
);

-- Down

DROP TABLE users;
DROP TABLE steps;
DROP TABLE distance;
DROP TABLE calories;
DROP TABLE activity;
DROP TABLE heartRate;
DROP TABLE sleep;
DROP TABLE reminder;
DROP TABLE medication;

-- drop database if exists aal_db;
