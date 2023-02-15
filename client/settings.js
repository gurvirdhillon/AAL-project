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

// implement the dark mode/light mode feature

// const getCheckBox = document.querySelector('#dark-light');

// getCheckBox.addEventListener('click', () => {
//   document.body.classList.toggle('dark');
// });

// implement the user profile page

// const imgInput = document.querySelector('#userProfilePicUpload');
// const displayImg = document.querySelector('#userProfilePic');

// imgInput.addEventListener('change', function () {
//   const file = imgInput.files[0];
//   const read = new FileReader();

//   read.onload = function (e) {
//     displayImg.src = e.target.result;
//   };
//   read.readAsDataURL(file);
// });

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
    alert('panic button activated');
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


