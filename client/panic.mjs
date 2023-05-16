async function activatePanicButton() {
  const panicBtn = document.querySelector('#panicBtn');
  panicBtn.addEventListener('click', async () => {
    const check = confirm('Are you sure you want to send a message to your next of kin?');
    if (check) {
      const response = await fetch('/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          body: 'Help me!',
          from: '+447908632941',
          to: '+447893943882',
        }),
      });
      alert('Message sent to next of kin');
      const data = await response.json();
    } else {
      alert('Message not sent');
    }
  });
  const data = await response.json();
  console.log(data);
}

window.addEventListener('load', activatePanicButton);
