import DoctorLookup from './../src/doctor-lookup.js';

const doctorLookup = new DoctorLookup();

describe('getDoctorsByIssue', function() {
  it('should return a list of doctors who treat sore throats', function() {
    doctorLookup.getDoctorsByIssue("sore throat").then((response) => {
      let body = JSON.parse(response);
      let doctorNames = []
      for (let i = 0; i < 3; i++) {
        let first_name = body.data[i].profile.first_name;
        let middle_name = body.data[i].profile.middle_name;
        let last_name = body.data[i].profile.last_name;
        doctorNames.push(`${first_name} ${middle_name} ${last_name}`);
      }
      expect(doctorNames[0]).toEqual("John William Topping");
      expect(doctorNames[1]).toEqual("Craig Kevin Hertler");
      expect(doctorNames[2]).toEqual("David Franklin Wilson");


    });
  });
});
