let input;

function inputOnChange() {
    let temp = input.value;
    let startPos = input.selectionStart;
    let endPos = input.selectionEnd;
    input.value = '';
    input.value = temp;
    input.selectionStart = startPos;
    input.selectionEnd = endPos;
}

function windowOnLoad() {
    input = document.getElementById("main-input");

    input.addEventListener('keyup', inputOnChange)
}

//The event('DOMContentLoaded') fires when all html elements are loaded
window.addEventListener('DOMContentLoaded', windowOnLoad);