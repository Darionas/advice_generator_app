'use strict'

const num = document.querySelector('.num');
const content = document.querySelector('.content');
const dice = document.querySelector('.main_dice');

const fetchAdvice = async() => {
    const apiEndpoint = `https://api.adviceslip.com/advice`;

    await fetch(apiEndpoint)
       .then(response => response.json())
       .then(data => {
            //console.log(data);
            num.innerHTML = data.slip.id;
            content.innerHTML = data.slip.advice;
       })
       .catch(error => console.log("Error :", error));
}

fetchAdvice();

dice.addEventListener('click', () => {
    fetchAdvice();
})
