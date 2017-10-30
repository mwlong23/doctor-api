(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = '3cf0ffbb88fae132f82086fd2704ace2';

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var apiKey = require('./../.env').apiKey;

var DoctorSearch = exports.DoctorSearch = function () {
  function DoctorSearch() {
    _classCallCheck(this, DoctorSearch);
  }

  _createClass(DoctorSearch, [{
    key: 'search',
    value: function search(baseUrl, category, doctorName) {
      var url = baseUrl + '&' + category + '=' + doctorName;

      return $.get(url).then(function (data) {
        var template = Handlebars.compile(document.getElementById('docs-template').innerHTML);
        document.getElementById('content-placeholder').innerHTML = template(data);
      });
    }
  }]);

  return DoctorSearch;
}();

},{"./../.env":1}],3:[function(require,module,exports){
'use strict';

var _doctorLookup = require('./../js/doctor-lookup.js');

var apiKey = require('./../.env').apiKey;


$(document).ready(function () {
  $('#search').submit(function (event) {
    event.preventDefault();

    var category = $('#category').val();
    var searchCriteria = $('#search-criteria').val();
    $('#search-criteria').val("");

    var baseUrl = 'https://api.betterdoctor.com/2016-03-01/doctors?location=47.606,-122.332,10&skip=2&limit=10&user_key=' + apiKey;

    var promise = new _doctorLookup.DoctorSearch();
    var searchResults = promise.search(baseUrl, category, searchCriteria);
    // debugger;


    // HanldeBars helpers for data formatting
    Handlebars.registerHelper('formatAcceptingPatients', function (acceptingPatients) {
      if (acceptingPatients === true) {
        return "Yes";
      } else {
        return "Not at this time.";
      }
    });

    Handlebars.registerHelper('formatPhoneNumber', function (phoneNumber) {
      phoneNumber = phoneNumber.toString();
      var firsThree = phoneNumber.slice(0, 3);
      var middleDigits = phoneNumber.slice(3, 6);
      var lastFour = phoneNumber.slice(-4);
      return '(' + firsThree + ') ' + middleDigits + '-' + lastFour;
    });
  });
});

},{"./../.env":1,"./../js/doctor-lookup.js":2}]},{},[3]);
