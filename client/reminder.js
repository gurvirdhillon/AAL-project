const createList = document.querySelector('#createList');
const reminderDate = document.querySelector('#reminderDate');
const handleSubmitBtn = document.querySelector('#submitBtn');
const article = document.getElementsByTagName('article')[0];

if(handleSubmitBtn){
handleSubmitBtn.addEventListener('click', function () {
  // show the sticky note element
  const stickyNote = document.querySelector('#stickyNote');
  article.innerHTML = stickyNote.innerHTML;
});
}