const apiKey = require('./../.env').apiKey
import { DoctorSearch } from './../js/doctor-lookup.js';

$(document).ready(function() {
  $('#search').submit(function(event){
    event.preventDefault();

    let category = $('#category').val();
    let searchCriteria = $('#search-criteria').val();
    $('#search-criteria').val("");
    if(searchCriteria !== ""){
      $('#blank-search-field').hide();
      let baseUrl = `https://api.betterdoctor.com/2016-03-01/doctors?location=47.606,-122.332,10&skip=2&limit=10&user_key=${apiKey}`;
      

      let promise = new DoctorSearch
      let searchResults = promise.search(baseUrl, category, searchCriteria)
    } else {
      $('#blank-search-field').show();
    }



  });
});
