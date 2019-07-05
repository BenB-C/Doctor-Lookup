import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import DoctorLookup from './../src/doctor-lookup.js';

const doctorLookup = new DoctorLookup();

$(document).ready(() => {
  $("form#doctor-search").submit((event) => {
    event.preventDefault();
    $("#search-results").hide();
    $("#no-results").hide();
    $("#doctors").empty();

    let searchType = $("select#search-type").val();
    let query = $("input#query").val();
    let getDoctorsPromise = (searchType === "name" ? doctorLookup.getDoctorsByName : doctorLookup.getDoctorsByIssue);

    getDoctorsPromise(query).then((response) => {
      console.log("responce received");
      let doctors = JSON.parse(response).data;
      let numberOfResults = doctors.length;
      $("#number-of-results").text(numberOfResults + " result" + (numberOfResults !== 1? "s":""));
      $(".query-display").text(query);
      if (numberOfResults === 0) {
        $("#no-results").show();
      }
      else {
        doctors.forEach(doctor => {
          // Generate string of list items for the doctor's practices
          let practicesListStr = "";
          doctor.practices.forEach(practice => {
            practicesListStr += `<div class="practice">`;
            let addressData = practice.visit_address;
            let addressString = addressData.street;
            if (addressData.street2){
              addressString += " " + addressData.street2;
            }
            addressString += `${addressData.city}, ${addressData.state} ${addressData.zip}`;

            practicesListStr += `<span class="practice-name">${practice.name}</span><br>`;
            practicesListStr += `${addressString}<br>`;
            practicesListStr += `${formatPhoneNumber(practice.phones[0].number)}<br>`;
            if (practice.website) {
              practicesListStr += `<a href="${practice.website}">${practice.website}</a><br>`;
            }
            practicesListStr += (practice.accepts_new_patients ? "A" : "Not a") + "ccepting new patients<br>";
            practicesListStr += `</div>`;
          });
          // Add html to the DOM for the doctor and each practice
          $("#doctors").append(`
            <li>
              <span class="doctor-name">${doctor.profile.first_name} ${doctor.profile.middle_name} ${doctor.profile.last_name}</span><br>
              <em>Practices:</em><br>
              <ul>
                ${practicesListStr}
              </ul>
            </li>
          `);
        });
      }
      $("#search-results").show();

    });
  });
});

function formatPhoneNumber(number) {
  return "(" + number.substring(0,3) + ") " + number.substring(3,6) + "-" + number.substring(6);

}
