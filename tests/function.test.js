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

// test if it successfully added the reminder input, date and time to local storage




// test if the medication has added the medication input and time to local storage

test('see if medication had added input and time to local storage', () => {
  expect(localStorage.getItem('medicationInput')).toBe('medicationInput');
  expect(localStorage.getItem(`${medication.time}`)).toBe(`${medication.time}`);
});

// export default test;
// export default app;
