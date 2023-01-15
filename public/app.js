// import { Accelerometer } from "accelerometer";

// if (Accelerometer) {
//    console.log("This device has an Accelerometer!");
//    const accelerometer = new Accelerometer({ frequency: 1 });
//    accelerometer.addEventListener("reading", () => {
//      console.log(`${accelerometer.x},${accelerometer.y},${accelerometer.z}`);
//    });
//    accelerometer.start();
// } else {
//    console.log("This device does NOT have an Accelerometer!");
// }

// reference: 

const access_token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzk4MjYiLCJzdWIiOiJCREhSWVkiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJ3aHIgd3BybyB3c2xlIHd0ZW0gd3dlaSB3ZWNnIHdjZiB3c2V0IHdhY3Qgd294eSB3cmVzIiwiZXhwIjoxNjczODQyNjI0LCJpYXQiOjE2NzM4MTM4MjR9.ge4JfNNpvXN55qznom5gOUbpilZRse1XupZ-2KMpa-8";

fetch('https://api.fitbit.com//1/user/-/profile.json', {
    method: "GET",
    headers: {"Authorization": "Bearer " + access_token}
})
.then(response => response.json())
.then(json => console.log(json));

fetch('https://api.fitbit.com/1/user/-/br/date/2021-10-04.json', {
    method: "GET",
    headers: {"Authorization": "Bearer " + access_token}
})
.then(response => response.json())
.then(json => console.log(json));

fetch('https://api.fitbit.com/1/user/-/devices.json', {
    method: "GET",
    headers: {"Authorization": "Bearer " + access_token}
})
.then(response => response.json())
.then(json => console.log(json));



