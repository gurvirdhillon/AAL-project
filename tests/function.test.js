import { app } from '../server/server.js'
import { JSDOM } from 'jsdom';

let authConfig = await fetch('http://localhost:8080/auth-config');
await test('Testing authorisation configuration endpoint', async () => {
  await expect(authConfig.status).toEqual(200);
});

// twilio api and checking if it is fully integrated and can send messages

let twilioTest = await fetch('http://localhost:8080/send-message');
await test('Testing Twilio endpoint', async () => {
  await expect(twilioTest.status).toEqual(404);
  // as there is no url parameter, the status code should be 404
});

let reminderPage = await fetch('http://localhost:8080/reminder.html');
await test('Testing reminder.html', async () => {
  await expect(reminderPage.status).toEqual(200);
});

// test if it successfully added the reminder input, date and time to local storage



// test if the medication has added the medication input and time to local storage


