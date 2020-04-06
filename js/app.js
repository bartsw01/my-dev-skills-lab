

// Create an array of skills to store our test data

// when the user clicks on the button add skill
    
// const testData = ['arrow functions', 'class constructors', 'objects'];

// let removedSkills = [];

//   $('#mySkills').on('click', 'button', function() {
//     let row = $(this).closest('tr');
//     removedSkills.push(row[0].outerHTML);
//     row.fadeOut(500, function() {
//       row.remove();
//     });
//     // $('#restoreHomes').removeAttr('disabled');
//   });

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


// $('button').on('click', function () {
//     console.log("It worked!");
//     // get the input from the user and store it in a variable
//     let element = $('input').val();
//     const $div = $('<div>').text(element);
//      // append the div and add remove button to the div #mySkills
//     let newSkill = `<button class="remove">X</button>${$div}`;
//     // make a div element and add the array content to the div
    
//     // add remove button to new skill
    
//     // append the div and add remove button to the div #mySkills
//     $('#addSkill').append(newSkill);
//     // clear the input box
//     $('input').val('');
// })

$(document).ready(function() {

    let removedSkills = [];
  
    $('#skills tbody').on('click', 'button', function() {
      let row = $(this).closest('tr');
      removedSkills.push(row[0].outerHTML);
      row.fadeOut(500, function() {
        row.remove();
      });
      // $('#restoreHomes').removeAttr('disabled');
    });
  
    $('#addSkill').click(function(event){
        let element = $('input').val();
        let newRow = `<tr>
            <td ><button class="remove">X</button></td>
            <td >${element}</td>
          </tr>`;
        $('#skills tbody').append(newRow);
    });
  
  })




    
    
    