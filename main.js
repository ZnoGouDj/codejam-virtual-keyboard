let symbols = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Up', 'Shift', 'Control', 'Win', 'Alt', 'Space', 'Alt', 'Left', 'Down', 'Right', 'Del'];

let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='];

let numbersPlusShift = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'];

let englishLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let capitalEnglishLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

let content = document.querySelector('.content');

let inputField = document.createElement('textarea');

inputField.setAttribute('rows', '10');

content.appendChild(inputField);

let keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
symbols.forEach(key => {
  let keyClass = key
    .split(' ')
    .join('-')
    .toLowerCase();
  let newKey = document.createElement('div');
  newKey.classList.add('key', keyClass);
  newKey.textContent = key;
  keyboard.appendChild(newKey);
});

content.appendChild(keyboard);