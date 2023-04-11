import { app } from '../server/server.js'
import { } from 'jest-localstorage-mock';

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
await test('Testing reminder.html if it renders', async () => {
  await expect(reminderPage.status).toEqual(200);
});

// test if it successfully added the reminder input, date and time to local storage

describe('Adding reminder to local storage', () => {
  test('local storage should hold the input, date and time', () => {
    // Set up test data
    const reminder = 'Test reminder';
    const date = '2023-04-12';
    const time = '10:30';

    // Add reminder to local storage
    localStorage.setItem('reminder', reminder);
    localStorage.setItem('date', date);
    localStorage.setItem('time', time);

    // Retrieve reminder from local storage
    const storedReminder = localStorage.getItem('reminder');
    const storedDate = localStorage.getItem('date');
    const storedTime = localStorage.getItem('time');

    // Assert that stored reminder matches input reminder
    expect(storedReminder).toEqual(reminder);

    // Assert that stored date matches input date
    expect(storedDate).toEqual(date);

    // Assert that stored time matches input time
    expect(storedTime).toEqual(time);
  });
});

// test if the medication has added the medication input and time to local storage

describe('adding medication to local storage should include the medication name and time', () => {
  test('local storage should hold the medication name and time', () => {
    // Set up test data
    const medication = 'Test medication';
    const time = '10:30';

    // Add medication to local storage
    localStorage.setItem('medication', medication);
    localStorage.setItem('time', time);

    // Retrieve medication from local storage
    const storedMedication = localStorage.getItem('medication');
    const storedTime = localStorage.getItem('time');

    // Assert that stored medication matches input medication
    expect(storedMedication).toEqual(medication);

    // Assert that stored time matches input time
    expect(storedTime).toEqual(time);
  });
});

// testing if the notification feature works for the medication



