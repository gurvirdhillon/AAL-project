import { app } from '../server/server.js'


let configTest = await fetch('http://localhost:8080/config');
await test('Testing Config endpoint', async () => {
  await expect(configTest.status).toEqual(404);
  // test to see if a 404 error is returned when the endpoint is not found
});


