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
          from: '+447893943882',
          to: '+447908632941'
        })
      });
      const data = await response.json();
      console.log(data);
    });
  });
