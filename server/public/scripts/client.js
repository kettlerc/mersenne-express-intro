console.log('JS');

$(document).ready(onReady);

function onReady() {
    console.log('JQ');
    getQuotes();
    console.log('submitButton', $('#submitButton'));
    $('#submitButton').on('click', addQuote);
};

function addQuote() {
    console.log('inside add quote');
    let newQuote = {
        text: $('#quoteInput').val(),
        author: $('#authorInput').val()
    };
    console.log('new quote is', newQuote);
    $.ajax({
        method: 'POST',
        url: '/quotes',
        data: newQuote
    }).then((response) => {
        console.log('post quotes', response);
        getQuotes();
    }).catch((error) => {
        console.log(error);
        //message to user about error, can be anything
        $('body').append('<h2>Failure message</h2>');
    });
};

function getQuotes() {
    $.ajax({
        method: 'GET',
        url: '/quotes'
    }) .then((response) => {
        console.log(response);
        let quoteList = $('#quotes');
        console.log(quoteList);
        quoteList.empty();
        for (let quote of response){
            quoteList.append(`
            <li>
            "${quote.text}" 
            <em> -- by ${quote.author} </em>
            </li>`);
        }
    });
};