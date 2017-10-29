(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const apiKey = '3cf0ffbb88fae132f82086fd2704ace2';

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import { apiKey } from './../.env';
var DoctorSearch = exports.DoctorSearch = function () {
  function DoctorSearch() {
    _classCallCheck(this, DoctorSearch);
  }

  _createClass(DoctorSearch, [{
    key: 'search',
    value: function search(searchTerm, category) {
      var apiKey = '3cf0ffbb88fae132f82086fd2704ace2';
      return $.get('https://api.betterdoctor.com/2016-03-01/doctors?location=37.773,-122.413,100&skip=2&limit=10&user_key=' + apiKey);
    }
  }, {
    key: 'hello',
    value: function hello(someParameter) {
      console.log('hello, workd. hello, ' + someParameter);
    }
  }, {
    key: 'find',
    value: function find(url) {
      return $.get(url);
    }
  }]);

  return DoctorSearch;
}();

},{}],3:[function(require,module,exports){
'use strict';

var _doctorLookup = require('./../js/doctor-lookup.js');

var apiKey = require('./../.env').apiKey;

var doctorSearch = new _doctorLookup.DoctorSearch();

$(document).ready(function () {
  $('#search').submit(function (event) {
    event.preventDefault();

    var category = $('#category').val();
    var searchCriteria = $('#search-criteria').val();

    debugger;

    var apiKey = '3cf0ffbb88fae132f82086fd2704ace2';

    var resource_url = 'https://api.betterdoctor.com/2016-03-01/doctors?location=47.606,-122.332,10&skip=2&limit=10&name=John&user_key=' + apiKey;

    $.get(resource_url, function (data) {
      // data: { meta: {<metadata>}, data: {<array[Practice]>} }
      var template = Handlebars.compile(document.getElementById('docs-template').innerHTML);
      document.getElementById('content-placeholder').innerHTML = template(data);
    });

    Handlebars.registerHelper('formatAcceptingPatients', function (acceptingPatients) {
      if (acceptingPatients === true) {
        return "Yes";
      } else {
        return "Not at this time.";
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

},{"./../.env":1,"./../js/doctor-lookup.js":2}]},{},[3]);
