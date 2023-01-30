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
