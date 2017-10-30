const apiKey = require('./../.env').apiKey
import { DoctorSearch } from './../js/doctor-lookup.js';

$(document).ready(function() {
  $('#search').submit(function(event){
    event.preventDefault();

    let category = $('#category').val();
    let searchCriteria = $('#search-criteria').val();
    $('#search-criteria').val("");

    let baseUrl = `https://api.betterdoctor.com/2016-03-01/doctors?location=47.606,-122.332,10&skip=2&limit=10&user_key=${apiKey}`;

    let promise = new DoctorSearch
    let searchResults = promise.search(baseUrl, category, searchCriteria)
    // debugger;


    // HanldeBars helpers for data formatting
    Handlebars.registerHelper('formatAcceptingPatients', function(acceptingPatients) {
      if(acceptingPatients === true){
        return "Yes";
      } else{
        return "Not at this time."
      }
    });

    Handlebars.registerHelper('formatPhoneNumber', function(phoneNumber) {
      phoneNumber  = phoneNumber.toString();
      let firsThree = phoneNumber.slice(0,3)
      let middleDigits = phoneNumber.slice(3,6)
      let lastFour = phoneNumber.slice(-4)
      return `(${firsThree}) ${middleDigits}-${lastFour}`;
    });

  });
});
