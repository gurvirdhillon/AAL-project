import { app } from '../server/server.js'

// twilio api and checking if it is fully integrated and can send messages

// let twilioTest = await fetch('http://localhost:8080/send-message');
// await test('Testing Twilio endpoint', async () => {
//   await expect(twilioTest.status).toEqual(200);
// });

let authConfig = await fetch('http://localhost:8080/auth-config');
await test('Testing authorisation configuration endpoint', async () => {
  await expect(authConfig.status).toEqual(200);
});

let twilioTest = await fetch('http://localhost:8080/send-message');
await test('Testing Twilio endpoint', async () => {
  await expect(twilioTest.status).toEqual(404);
  // as there is no payload from typing /send-message in the url, it would return a url
});

// test if the reminder input features are fully functional with the notification feature



// test if the medication feature allows for inputting of medication and the time of the day to take the medication



