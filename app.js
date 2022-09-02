console.log("Let's get this party started!");
const $sub = $('#submit');
const $data = $('#search');
let $placeholder = $('#placeholder');
$sub.on('click', async function(evt){
    evt.preventDefault();
    const res = await axios.get('http://api.giphy.com/v1/gifs/search', {params: {q: `${$data.val()}`, api_key: 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym'}});
    $(`<img src = ${res.data.data[Math.floor(Math.random()* res.data.data.length-1)].images.original.url}></img>`).appendTo($('body'));
    $('#search').val('');
})
$('#delete').on('click', function(){
    $('img').remove();
})