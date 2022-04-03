let input;
let viewRawCheckbox;

function inputOnChange() {
    let temp = input.value;
    let startPos = input.selectionStart;
    let endPos = input.selectionEnd;
    input.value = '';
    input.value = temp;
    input.selectionStart = startPos;
    input.selectionEnd = endPos;
}

function viewRawCheckboxOnChange() {
    if (viewRawCheckbox.checked)
        input.classList.remove("toki-pona");
    else
        input.classList.add("toki-pona");
}

function windowOnLoad() {
    input = document.getElementById("main-input");
    viewRawCheckbox = document.getElementById("checkbox-raw");

    input.addEventListener('keyup', inputOnChange)
    viewRawCheckbox.addEventListener('change', viewRawCheckboxOnChange);
}

//The event('DOMContentLoaded') fires when all html elements are loaded
window.addEventListener('DOMContentLoaded', windowOnLoad);