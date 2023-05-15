"use strict";
//we are gonna go async
const getData = () => {
    fetch('https://api.nbp.pl/api/exchangerates/tables/a/?format=json') //we don't put ; because we need to use .then in the next line
    .then(response => response.json())
    .then(result => {
        console.log(result);

        console.log(result[0].rates); //rates is the table name in our currency json taken from the NBP site

        result[0].rates.forEach((elem, i) => {
            //i is from the forEach loop predeclared
            const tr = document.createElement('tr');
            
            tr.innerHTML = `
            <td>${++i}</td>
            <td>${elem.currency}</td>
            <td>${elem.mid}</td>
            `; //liczba porządkowa l.p to będzie numer indeksu
            
            document.querySelector("table tbody").appendChild(tr);
        });
    });
    //fetch uses GET http method on default
    //works without refreshing the page
}

const btn = document.querySelector('button');

btn.addEventListener('click', getData);