'user strict';

const send = document.querySelector ('send');

send.click = function (event) {
    event.preventDefault ()

    console.log('form.value')
}