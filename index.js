'use strict'


const fetchAdvice = async() => {
    const apiEndpoint = `https://api.adviceslip.com/advice`;

    await fetch(apiEndpoint)
       .then(response => response.json())
       .then(data => {
        console.log(data);
        console.log(data.slip.id);
        console.log(data.slip.advice);
       })
       .catch(error => console.log("Error :", error));
}

fetchAdvice();