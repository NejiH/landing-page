const button = document.querySelector('.submit');
const input = document.querySelector('.email');
const formatEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const iconError = document.querySelector('.icon-error');
const textError = document.querySelector('.text-error');
let message = [];

button.addEventListener('click', e => {
    message = [];

    e.preventDefault();

    const email = input.value;


    if (email == '' || email == undefined) {
        message.push('Veuillez rentrer votre email');
        iconError.style.display = 'block';
        textError.innerText = message[0];

    } else if (!email.match(formatEmail)) {
        message.push('Veuillez rentrer un email valide');
        iconError.style.display = 'block';
        textError.innerText = message[0];

    }

    if (!message.length > 0) {
        iconError.style.display = 'none';
        textError.innerText = 'Merci de vous etre inscrit.e a notre newsletter'

    }
});

