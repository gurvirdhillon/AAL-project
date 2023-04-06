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
  // as there is no url parameter, the status code should be 404
});

// test if the notification feature allows for inputting of notification and the time of the day to send the notification




// test if the medication feature allows for inputting of medication and the time of the day to take the medication



