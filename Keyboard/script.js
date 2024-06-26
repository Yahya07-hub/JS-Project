const keyboard = document.querySelector('.keyboard');
const inputField = document.querySelector('#input-field');

keyboard.addEventListener('click', (e) => {
  if (e.target.classList.contains('key')) {
    const key = e.target.dataset.key;
    if (key === 'backspace') {
      inputField.value = inputField.value.slice(0, -1);
    } else if (key === 'space') {
      inputField.value += '';
    } else {
        inputField.value += key;
    }
  }
});

// window.addEventListener('keydwon', (e) => {
//     inputField.innerHTML = e.key 
//     // e.key === ' ' ? 'Space' : e.key
// })

window.addEventListener('keydown', (e) => {
    inputField.innerHTML = e.key
    
  });