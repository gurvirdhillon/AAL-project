# Project-AAL

## About

This project is about ambient assisted living which is where elderly individuals are monitored using unobtrusive technologies such as smart devices.

This project aims to improve the quality of care for elderly using web and smart watch devices. The application aims to give an "all-in-one" application which will be discussed later in the feature set section.

## Technologies and tools used

* JavaScript
* NodeJS
* ExpressJS
* SQLite
* FitbitAPI
* HTML & CSS

I created a HTML page and had used ExpressJS to start my server. I had used javascript to respond to clicks and to provide responses to
key tasks. I had used the FitbitAPI to communicate data of the users smart watch device. This had included things such as step count, heart rate, temperature and many other features that help the user in their daily activities.

TwilioAPI was used to integrate messages from the user to their next of kin. This feature allowed for easy reporting of emergencies. Furthermore, it can be configured to a users specific phone number. TwilioAPI required two phone numbers, the reciever and the sender. The sender was the number provided by Twilio. The recievers number has been removed therefore if the code was to be edited once more and a real number was placed - it will provide the user with a message.

## Installation dependencies

This project relies on the use of Node as it has been devevloped as a web project.

```git
npm i jest
npm i sqlite3
npm i sqlite
npm i express
npm i twilio
npm i passport
npm i oauth2orize
npm i passport-http-bearer
```

## Features implemented

* Reminder feature
* User activity monitoring and alerting caregivers
* Medication management
* Ability to adjust the settings to users preference
* Chat feature
* Panic button
* A Microphone which includes an integrated emergency button

Future works:

* User profile
* Database maintenance management
* Cross platform compatibility
* Fitbit real time data analysis
* Apple watch compatibility
