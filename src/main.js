import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import DoctorLookup from './../src/doctor-lookup.js';

const doctorLookup = new DoctorLookup();

$(document).ready(() => {
  $("form#doctor-search").submit((event) => {
    event.preventDefault();
    let searchType = $("select#search-type").val();
    let query = $("input#query").val();
    let getDoctorsPromise = (searchType === "name" ? doctorLookup.getDoctorsByName : doctorLookup.getDoctorsByIssue);

    getDoctorsPromise(query).then((response) => {
      let doctors = JSON.parse(response).data;
      console.log(doctors);
    });
  });
});
