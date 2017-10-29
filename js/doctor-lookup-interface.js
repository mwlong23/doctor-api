const apiKey = require('./../.env').apiKey


import { DoctorSearch } from './../js/doctor-lookup.js';
let doctorSearch = new DoctorSearch();


$(document).ready(function() {
  $('#search').submit(function(event){
    event.preventDefault();

    let category = $('#category').val();
    let searchCriteria = $('#search-criteria').val();

    debugger;

    let apiKey = '3cf0ffbb88fae132f82086fd2704ace2';

    var resource_url = 'https://api.betterdoctor.com/2016-03-01/doctors?location=47.606,-122.332,10&skip=2&limit=10&name=John&user_key=' + apiKey;


    $.get(resource_url, function (data) {
    // data: { meta: {<metadata>}, data: {<array[Practice]>} }
    var template = Handlebars.compile(document.getElementById('docs-template').innerHTML);
    document.getElementById('content-placeholder').innerHTML = template(data);
    });

    Handlebars.registerHelper('formatAcceptingPatients', function(acceptingPatients) {
      if(acceptingPatients === true){
        return "Yes";
      } else{
        return "Not at this time."
      }
    });

  });
});





// let results = $.ajax({
//   url:`https://api.betterdoctor.com/2016-03-01/doctors?location=47.606,-122.332,10&skip=2&limit=1&user_key=3cf0ffbb88fae132f82086fd2704ace2&first_name=bill`,
//   type: 'GET',
//   data: {
//     format: 'json'
//   },
//   success: function(response){
//     $('#showResults').text(`Results: ${response.data}`)
//   },
//   error: function () {
//     $('#errors').text("There were errors processing your request, please try again")
//   }
// })
// debugger;
