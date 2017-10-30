const apiKey = require('./../.env').apiKey

export class DoctorSearch {
  search(baseUrl, category, doctorName){
    let url =`${baseUrl}&${category}=${doctorName}`

    return $.get(url).then(function(data){
      let template = Handlebars.compile(document.getElementById('docs-template').innerHTML);
      document.getElementById('content-placeholder').innerHTML = template(data);
    });
  }
}
