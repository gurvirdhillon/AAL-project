// const updateContent = document.querySelector('#update');
// const currentDate = document.querySelector('#reminderDate');
// const todos_los_dias = new Date().toISOString().split('T')[0];
// currentDate.setAttribute('min', todos_los_dias);

setInterval(() => {
  const myDate = document.querySelector('#reminderDate');
  const todos_los_dias = new Date().toISOString().split('T')[0];
  myDate.setAttribute('min', todos_los_dias);
}, 86400000);

// 86400000 as that is how many milliseconds are in a day
