// the navigation bar for the whole page
document.addEventListener('DOMContentLoaded', () => {
  const reminderBtn = document.querySelector('#reminder');
  reminderBtn.addEventListener('click', function() {
    window.location.href = 'reminder.html';
  });

  const medsBtn = document.querySelector('#meds');
  medsBtn.addEventListener('click', function() {
    window.location.href = 'medication.html';
  });

  const chatClicked = document.querySelector('#chatSystem');
  chatClicked.addEventListener('click', function() {
    window.location.href = 'chat.html';
  });

const buttonStngs = document.querySelector('#settings');
buttonStngs.addEventListener('click', function() {
  window.location.href = 'settings.html';
});

  const homeBtn = document.querySelector('#home');
  homeBtn.addEventListener('click', function() {
    window.location.href = 'index.html';
  });

  const UAbtn = document.querySelector('#UA');
  UAbtn.addEventListener('click', function() {
    window.location.href = 'activity.html';
  });
});

window.addEventListener('click', function () {
  const handleProfileClick = document.querySelector('#UserProfileBtn');
  const getUserProfile = document.querySelector('#targetBdy');
  const getTemplate = document.querySelector('#UserProfileReveal');
  if (handleProfileClick) {
    handleProfileClick.addEventListener('click', function () {
      getUserProfile.innerHTML = getTemplate.innerHTML;
    });
  }
});

window.addEventListener('click', function () {
  const handleNotifications = document.querySelector('#NotifyBtn');
  const getNotifications = document.querySelector('#targetBdy');
  const getContent = document.querySelector('#NotificationsSettings');
  if (handleNotifications) {
    handleNotifications.addEventListener('click', function () {
      getNotifications.innerHTML = getContent.innerHTML;
    });
  }
});

window.addEventListener('click', function () {
  const handleSettings = document.querySelector('#accessBtn');
  const accessibilityLocate = document.querySelector('#targetBdy');
  const accessSettings = document.querySelector('#accessSettings');
  if (handleSettings) {
    handleSettings.addEventListener('click', function () {
      accessibilityLocate.innerHTML = accessSettings.innerHTML;
    });
  }
});

window.addEventListener('click', function () {
  const changeDetails = document.querySelector('#detailsBtn');
  const getDetails = document.querySelector('#targetBdy');
  const getTemplate = document.querySelector('#nextOfKinDetails');
  if (changeDetails) {
    changeDetails.addEventListener('click', function () {
      getDetails.innerHTML = getTemplate.innerHTML;
    });
  }
});

const grabForm = document.querySelector('#user-profile-form');
const pictureInput = document.querySelector('#user-picture');

if(grabForm){
grabForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const dob = document.querySelector('#dob').value;
  const description = document.querySelector('#description').value;

  const formData = new FormData();
  formData.append('picture', pictureInput.files[0]);
  fetch('/upload-picture', { method: 'POST', body: formData })
    .then(function(response) {
      return response.json();
    })
    .then(function(pictureUrl) {
      // Update the user profile information in Auth0
      auth0.users.updateUserMetadata(userId, { pictureUrl, dob, description }, function(err) {
        if (err) {
          console.error(err);
          return;
        }
        // Store the user profile information in the SQLite database
        const sqliteInsert = `
          INSERT INTO user_profiles (user_id, picture_url, dob, description)
          VALUES (${userId}, ${pictureUrl}, ${dob}, ${description})
        `;
      });
    });
});
}

// speech api

// Speech recognition app using Vanilla JavaScript. YouTube. (2020, August 27). 
// Retrieved from https://youtu.be/-k-PgvbktX4 


document.addEventListener('DOMContentLoaded', () => {
window.speechRecognition = window.speechRecognition || window.webkitSpeechRecognition;

const recognition = new window.speechRecognition();
recognition.interimResults = true;

// let transcript = document.createElement('p');

const getInput = document.querySelector('#searchInput');
const microphoneButton = document.querySelector('#microphone');

recognition.addEventListener('result', async (e) => {
  const voiceInput = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join('');
    getInput.value = voiceInput;
  // console.log(voiceInput);
  if(voiceInput === 'help me'){
    // get the panic button to send a message to the next of kin
    await fetch('/send-message', {
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
    alert('panic button activated');
  }
  // get the input bar to display whatever is being said
});

if(microphoneButton !== null) {
    microphoneButton.addEventListener('click', () => {
    recognition.start();
  });
}

recognition.addEventListener('end', () => {
  recognition.start();
});
});

// dark and light mode feature

document.addEventListener('DOMContentLoaded', () => {
  const checkbox = document.querySelector('#chk');
  checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const revelio = document.querySelector('#revelio');
  revelio.addEventListener('click', () => {
    const getTemplate = document.querySelector('#contextDarkMode');
    const placeContext = document.querySelector('#placeContext');
    placeContext.innerHTML = getTemplate.innerHTML;
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const revelio2 = document.querySelector('#revelio2');
  revelio2.addEventListener('click', () => {
    const audioContext = document.querySelector('#contextAudio');
    const placeContext2 = document.querySelector('#placeContext2');
    placeContext2.innerHTML = audioContext.innerHTML;
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const reader = document.querySelector('.reader');
  reader.addEventListener('click', () =>{
  const synthesis = window.speechSynthesis;
    const getGreeting = document.querySelector('#greeting');
    const vocal = new SpeechSynthesisUtterance(getGreeting.textContent);
  synthesis.speak(vocal);
});
});

document.addEventListener('DOMContentLoaded', () => {
  const activateVoice = document.querySelector('#activitySummaryVoiceOver');
  activateVoice.addEventListener('click', () => {
    const syntehsis = window.speechSynthesis;
    const gatherMetaData = document.querySelector('#analyseData');
    const vocal = new SpeechSynthesisUtterance(gatherMetaData.textContent);
    syntehsis.speak(vocal);
  });
});


// activitySummaryVoiceOver
