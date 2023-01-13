function preparePage() {
    const reminderBtn = document.querySelector('#reminder');
    reminderBtn.addEventListener('click', () => {
        console.log('Reminder button clicked');
    });      
}

window.addEventListener('load', preparePage);
