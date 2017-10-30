const apiKey = require('./../.env').apiKey

export class DoctorSearch {
  search(baseUrl, category, doctorName){
    let url =`${baseUrl}&${category}=${doctorName}`

    return $.get(url).then(function(data){
      let template = Handlebars.compile(document.getElementById('docs-template').innerHTML);
      document.getElementById('content-placeholder').innerHTML = template(data);
    })
    .then(Handlebars.registerHelper('formatPhoneNumber', function(phoneNumber) {
          phoneNumber  = phoneNumber.toString();
          let firsThree = phoneNumber.slice(0,3)
          let middleDigits = phoneNumber.slice(3,6)
          let lastFour = phoneNumber.slice(-4)
          return `(${firsThree}) ${middleDigits}-${lastFour}`;
        }))
    .then(Handlebars.registerHelper('formatAcceptingPatients', function(acceptingPatients) {
          if(acceptingPatients === true){
            return "Yes";
          } else{
            return "Not at this time."
          }
        }))
  }
  // let formatPhone =
  //
  // let formatAcceptingNewPatients = ;
}
