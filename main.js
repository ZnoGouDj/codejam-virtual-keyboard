const englishKb = {
    rows: [
        [
            { key: '`', code: 192, width: 1 },
            { key: '1', code: 49, width: 1 },
            { key: '2', code: 50, width: 1 },
            { key: '3', code: 51, width: 1 },
            { key: '4', code: 52, width: 1 },
            { key: '5', code: 53, width: 1 },
            { key: '6', code: 54, width: 1 },
            { key: '7', code: 55, width: 1 },
            { key: '8', code: 56, width: 1 },
            { key: '9', code: 67, width: 1 },
            { key: '0', code: 48, width: 1 },
            { key: '-', code: 189, width: 1 },
            { key: '=', code: 187, width: 1 },
            { key: 'backspace', code: 8, width: 2 }
        ],
        [
            { key: 'tab', code: 9, width: 2 },
            { key: 'q', code: 81, width: 1 },
            { key: 'w', code: 87, width: 1 },
            { key: 'e', code: 69, width: 1 },
            { key: 'r', code: 82, width: 1 },
            { key: 't', code: 84, width: 1 },
            { key: 'y', code: 89, width: 1 },
            { key: 'u', code: 85, width: 1 },
            { key: 'i', code: 73, width: 1 },
            { key: 'o', code: 79, width: 1 },
            { key: 'p', code: 80, width: 1 },
            { key: '[', code: 219, width: 1 },
            { key: ']', code: 221, width: 1 },
            { key: "\\", code: 220, width: 1 }
        ],
        [
            { key: 'caps', code: 20, width: 3 },
            { key: 'a', code: 65, width: 1 },
            { key: 's', code: 83, width: 1 },
            { key: 'd', code: 68, width: 1 },
            { key: 'f', code: 70, width: 1 },
            { key: 'g', code: 71, width: 1 },
            { key: 'h', code: 72, width: 1 },
            { key: 'j', code: 74, width: 1 },
            { key: 'k', code: 75, width: 1 },
            { key: 'l', code: 76, width: 1 },
            { key: ';', code: 186, width: 1 },
            { key: "\'", code: 222, width: 1 },
            { key: 'enter', code: 13, width: 3 }
        ],
        [
            { key: 'shift', code: 16, width: 4 },
            { key: 'z', code: 90, width: 1 },
            { key: 'x', code: 88, width: 1 },
            { key: 'c', code: 67, width: 1 },
            { key: 'v', code: 86, width: 1 },
            { key: 'b', code: 66, width: 1 },
            { key: 'n', code: 78, width: 1 },
            { key: 'm', code: 77, width: 1 },
            { key: ',', code: 188, width: 1 },
            { key: '.', code: 190, width: 1 },
            { key: '/', code: 191, width: 1 },
            { key: '⯅', code: 38, width: 1 },
            { key: 'shift', code: 16, width: 0 }
        ],
        [
            { key: 'ctrl', code: 17, width: 1 },
            { key: 'win', code: 91, width: 1 },
            { key: 'alt', code: 18, width: 1 },
            { key: 'space', code: 32, width: 5 },
            { key: 'alt', code: 18, width: 1 },
            { key: 'ctrl', code: 17, width: 1 },
            { key: 'del', code: 46, width: 1 },
            { key: '⯇', code: 37, width: 1 },
            { key: '⯆', code: 40, width: 1 },
            { key: '⯈', code: 39, width: 0 }
        ],
    ]
};

document.addEventListener('keydown', evt => {
    const buttonEl = document.getElementById(evt.keyCode);
    if (buttonEl) {
        buttonEl.classList.add('active');
    }
})

document.addEventListener('keyup', evt => {
    const buttonEl = document.getElementById(evt.keyCode);
    if (buttonEl) {
        buttonEl.classList.remove('active');
    }
})

function renderKeyboardRow(rowEl, row) {
    row.forEach(button => {
        const buttonEl = document.createElement('button');
        buttonEl.classList.add(`width-${button.width}`);
        buttonEl.id = button.code;
        buttonEl.innerText = button.key;
        rowEl.appendChild(buttonEl);
    });
}

function renderKeyboard(target, keyboard) {
    keyboard.rows.forEach(row => {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('keys-row');
        renderKeyboardRow(rowDiv, row);
        target.appendChild(rowDiv);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const keyboardDiv = document.getElementById('keyboard');
    if (keyboardDiv) {
        renderKeyboard(keyboardDiv, englishKb);
    }
});