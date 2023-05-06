const access_token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzk4SFYiLCJzdWIiOiJCREdNQkoiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJ3aHIgd251dCB3cHJvIHd0ZW0gd3NsZSB3d2VpIHdlY2cgd2NmIHdhY3Qgd3JlcyB3b3h5IiwiZXhwIjoxNjc0MzMyNjQ4LCJpYXQiOjE2NzQzMDM4NDh9.g1QM5YsATpxbaAF1duM_meEFxtVQeeHEZWEFn8G7sw8';

fetch('https://api.fitbit.com/1/user/-/profile.json', {
  method: 'GET',
  headers: { Authorization: 'Bearer ' + access_token },
})
  .then(response => response.json())
  .then(json => console.log(json));


fetch('https://api.fitbit.com/1.2/user/-/sleep.json?date=2023-01-21&startTime=22:00&duration=720000', {
  method: 'GET',
  headers: { Authorization: 'Bearer ' + access_token },
})
  .then(response => response.json())
  .then(json => console.log(json));

fetch('https://api.fitbit.com/1/user/-/br/date/2023-01-23.json', {
  method: 'GET',
  headers: { Authorization: 'Bearer ' + access_token },
})
  .then(response => response.json())
  .then(data => {
    const usersData = data.map(item => {
      const target = document.querySelector('#usersData');
      target.textContent = usersData;
      return target;
    });
    usersData.forEach(usersData => {
      document.body.appendChild(usersData);
    });
  });
// .then(json => console.log(json));

const grabData = fetch('https://api.fitbit.com/1/user/-/activities/heart/date/2023-01-15/2023-01-23.json', {
  method: 'GET',
  headers: { Authorization: 'Bearer ' + access_token },
})
  .then(response => response.json())
  .then(json => console.log(json));

// display the json data on the page

// get the fitbit data to display (placeholder values for now)

document.addEventListener('DOMContentLoaded', () => {
  const getBtn = document.querySelector('#getStats');
  const stepsCount = document.querySelector('#stepsCount');
  const distanceCount = document.querySelector('#distanceCount');
  const activeMins = document.querySelector('#activeMins');
  const floorsCount = document.querySelector('#floorsCount');
  const heartRate = document.querySelector('#heartRate');
  const sleepQuality = document.querySelector('#sleepQuality');
  const currentDate = document.querySelector('#date');

  // when getBtn is clicked it puts random numbers in the span tags
  getBtn.addEventListener('click', () => {
    currentDate.textContent = new Date().toLocaleDateString();
    localStorage.setItem('currentDate', currentDate.textContent);
    stepsCount.textContent = Math.floor(Math.random() * 10000);
    localStorage.setItem('stepsCount', stepsCount.textContent);
    distanceCount.textContent = Math.floor(Math.random() * 10);
    localStorage.setItem('distanceCount', distanceCount.textContent);
    activeMins.textContent = Math.floor(Math.random() * 100);
    localStorage.setItem('activeMins', activeMins.textContent);
    floorsCount.textContent = Math.floor(Math.random() * 10);
    localStorage.setItem('floorsCount', floorsCount.textContent);
    heartRate.textContent = Math.floor(Math.random() * 100);
    if (heartRate.textContent < 60) {
      heartRate.style.color = 'red';
      heartRate.style.fontWeight = 'bold';
    } else if (heartRate.textContent > 60 && heartRate.textContent < 100) {
      heartRate.style.color = 'green';
      heartRate.style.fontWeight = 'bold';
    } else if (heartRate.textContent > 100) {
      heartRate.style.color = 'red';
      heartRate.style.fontWeight = 'bold';
    }
    localStorage.setItem('heartRate', heartRate.textContent);
    sleepQuality.textContent = Math.floor(Math.random() * 12);
    localStorage.setItem('sleepQuality', sleepQuality.textContent);
  });
});


// get the local storage of the above data
