"use strict";

//  a/?format=json b/  c/
const baseUrl = 'https://api.nbp.pl/api/exchangerates/tables/';

//async, the (table) brackets are not required only for looks
const getCurrency = async (table) => {
    //try to run the code and catch any errors
    try {
        const response = await fetch(`${baseUrl}${table}`); //concat the link 
        const data = await response.json();
        return data;
    } catch(err) {
        console.error;
    }
}

//get the table [B] from NBP website
//type in A B or C to get different currencies <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
getCurrency('b').then(data => {
    console.log(data);

    //this is equal to const currencies = data[0];
    //destrukturyzacja kodu, [nazwa] od razu przypisuje to jako tabelke na index 0 
    const [currencies] = data;

    //this is an object called rates via {}
    const {rates} = currencies;

    rates.forEach((elem, i) => {
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