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
    })
        .then(function(response) {
            console.log(response);
            $('#quotes').append(`<li></li>`)
        });
}