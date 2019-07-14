const textArea = document.getElementById('textarea');
const saveButton = document.querySelector('.save__js');
const loadButton = document.querySelector('.load__js');

saveButton.addEventListener('click', () => {
    localStorage.setItem('text', textArea.value)
});
loadButton.addEventListener('click', () => {
    textArea.value = localStorage.getItem('text')
});