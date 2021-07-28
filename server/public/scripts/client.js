console.log('JS');

$(document).ready(onReady);

function onReady() {
    console.log('JQ');
    getQuotes();   
}

function getQuotes() {
    $.ajax({
        method: 'GET',
        url: '/quotes'
    }) .then(function(response) {
        console.log(response);
        let quoteList = $('#quotes');
        console.log(quoteList);
        for (let quote of response){
            quoteList.append(`
            <li>
            "${quote.text}" 
            <em> -- by ${quote.author} </em>
            </li>`);
        }
    });
}