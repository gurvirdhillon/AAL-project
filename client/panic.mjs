document.addEventListener('DOMContentLoaded', () => {
    const panicBtn = document.querySelector('#panicBtn');
    panicBtn.addEventListener('click', async () => {
      const response = await fetch('/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          body: 'Help me!',
          from: '+447908632941',
          to: '+447893943882'
        })
      });
      alert('Message sent to next of kin');
      const data = await response.json();
      console.log(data);
    });
  });

// triggers the call of the Twilio API

// document.addEventListener('DOMContentLoaded', () => {
//   const getTelephoneBtn = document.getElementById('teleBtn');
//   if(getTelephoneBtn){
//   getTelephoneBtn.addEventListener('click', async () => {
//     const response = await fetch('/call', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded'
//       },
//       body: JSON.stringify({
//         url: 'http://demo.twilio.com/docs/voice.xml',
//         to: '+447908632941',
//         from: '+447893943882'
//         // with this functionality, the user will be able to call their next of kin for things such as a quick chat or to ask for help
//       })
//     });
//     const data = await response.json();
//     console.log(data);
//   });
//   };
// });

document.addEventListener('DOMContentLoaded', () => {
  const requestCall = document.querySelector('#teleBtn');
  if(requestCall){
    requestCall.addEventListener('click', async () => {
      const response = await fetch('/call', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          body: 'A call has been requested',
          to: '+447908632941',
          from: '+447893943882'
        })
      });
      const data = await response.json();
      console.log(data);
    }
    );
  };
});

