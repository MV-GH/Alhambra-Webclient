"use strict";

document.addEventListener('DOMContentLoaded', init);

function init() {
    document.querySelector('#copy').addEventListener('click', copy);
    setPlayersJoined();
}

function copy() {
    const copyText = document.querySelector("#inviteURL");
    selectText(copyText);
    document.execCommand("copy");
}

function selectText(text) {
    if (document.body.createTextRange) { // ms
        const range = document.body.createTextRange();
        range.moveToElementText(text);
        range.select();
    } else if (window.getSelection) { // moz, opera, webkit
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
    }
}

function setPlayersJoined() {
    getPlayerCount(localStorage.getItem('gameId'), localStorage.getItem('playerToken')).then(resp => {
       const header = document.querySelector('h1');
       header.innerText = header.innerText.replace(header.innerText.charAt(0),resp);
    });
}

