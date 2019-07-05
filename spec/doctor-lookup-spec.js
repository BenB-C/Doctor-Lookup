import DoctorLookup from './../src/doctor-lookup.js';

const doctorLookup = new DoctorLookup();

describe('getDoctorsByIssue', function() {
  it('should return a list of doctors who treat sore throats', function() {
    doctorLookup.getDoctorsByIssue("sore throat").then((response) => {
      const body = JSON.parse(response);
      const first_name = body.data[0].profile.first_name;
      const middle_name = body.data[0].profile.middle_name;
      const last_name = body.data[0].profile.last_name;
      expect(`${first_name} ${middle_name} ${last_name}`).toEqual("John William Topping");
    });
  });
});
