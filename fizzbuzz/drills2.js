/* eslint-disable strict */

function fizzbuzz() {
  $('#number-chooser').submit(event => {
    event.preventDefault(); 
          
    if ($('number-choice').val() % 15 === 0) {
      $('js-results').append(
        '<div class="fizz-buzz-item fizzbuzz"><span>fizzbuzz</span></div>');  
    }
    else if ($('number-choice').val() % 5 === 0) {
      $('js-results').append(
        '<div class="fizz-buzz-item buzz"><span>buzz</span></div>'); 
    }
    else if ($('number-choice').val() % 3 === 0) {
      $('js-results').append($(
        '<div class="fizz-buzz-item fizz"><span>fizz</span></div>')); 
    }
    // else {
    //   $('js-results').append($(
    //     `<div class="fizz-buzz-item"><span>$('number-choice').val()</span></div>`); 
  } );
}
  
$(fizzbuzz());