console.log($);

// Create an array of skills to store our test data

// when the user clicks on the button add skill
    

    const testData = ['arrow functions', 'class constructors', 'objects'];

    // document.querySelector('button').addEventListener('click', {})
// $('button').on('click', function(){
//     console.log("It Worked!")
//     // pop off the last array element store it in a variable
//     let element = testData.pop();
//     console.log(element);
//     // make a div element and add the array content to the div
//     const $div = $('<div>').text(element);
//     // append the div to the div #mySkills
//     $('#mySkills').append($div);
// })


$('button').on('click', function () {
    console.log("It worked!");
    // get the input from the user and store it in a variable
    let element = $('input').val();
    // make a div element and add the array content to the div
    const $div = $('<div>').text(element);
    // append the div to the div #mySkills
    $('#mySkills').append($div);
    // clear the input box
    $('input').val('');
})






    
    
    