const access_token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzk4SFYiLCJzdWIiOiJCREdNQkoiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJ3aHIgd251dCB3cHJvIHd0ZW0gd3NsZSB3d2VpIHdlY2cgd2NmIHdhY3Qgd3JlcyB3b3h5IiwiZXhwIjoxNjc0MzMyNjQ4LCJpYXQiOjE2NzQzMDM4NDh9.g1QM5YsATpxbaAF1duM_meEFxtVQeeHEZWEFn8G7sw8";

fetch('https://api.fitbit.com//1/user/-/profile.json', {
    method: "GET",
    headers: {"Authorization": "Bearer " + access_token}
})
.then(response => response.json())
.then(json => console.log(json));


fetch('https://api.fitbit.com/1.2/user/-/sleep.json?date=2023-01-21&startTime=22:00&duration=720000',{
    method: "GET",
    headers: {"Authorization": "Bearer " + access_token}
})
.then(response => response.json())
.then(json => console.log(json));

fetch('https://api.fitbit.com/1/user/-/br/date/2023-01-23.json', {
    method: "GET",
    headers: {"Authorization": "Bearer " + access_token}
})
.then(response => response.json())
.then(json => console.log(json));

const grabData = fetch('https://api.fitbit.com/1/user/-/activities/heart/date/2023-01-15/2023-01-23.json', {
    method: "GET",
    headers: {"Authorization": "Bearer " + access_token}
})
.then(response => response.json())
.then(json => console.log(json));

// display the data on the page

