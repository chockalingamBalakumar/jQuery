$('.spoiler').on('click', 'button', function(event){
    console.log(event);
    //show the spoiler text
    $(event.target).prev().show();
    //Hide the "Reveal spoiler" button 
    $(event.target).hide();

});

//Create the "Reveal Spoiler" button
const $button = $('<button>Reveal Spoiler</button>');
//Append web page
$('.spoiler').append($button);

//Hiding the spoiler text
$('.spoiler span').hide();

//when the button is pressed

