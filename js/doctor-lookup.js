// import { apiKey } from './../.env';
export class DoctorSearch{
  search(searchTerm, category){
    let apiKey = '3cf0ffbb88fae132f82086fd2704ace2';
    return $.get(`https://api.betterdoctor.com/2016-03-01/doctors?location=37.773,-122.413,100&skip=2&limit=10&user_key=${apiKey}`);
  };

  hello(someParameter) {
    console.log(`hello, workd. hello, ${someParameter}`);
  };

  find(url){
    return $.get(url);
  }
}
