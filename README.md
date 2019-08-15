# Doctor Lookup

#### Epicodus JavaScript - Asynchrony and APIs Project - 2019.07.05

#### By Ben Bennett-Cauchon

## Description

A website where users may enter a medical issue (ie: “sore throat”, "rash", etc.) into a form, submit it, and receive a list of doctors in your city (Portland or Seattle depending on where you are) who can treat their medical issue.

## Specs

| Behavior | Input | Output |
| ------------- |:-------------:| -----:|
| A user should be able to enter a medical issue to receive a list of doctors in the Portland area that fit the search query. | Sore throat | A list of doctors in the Portland area that can treat a sore throat |
| A user should be able to to enter a name to receive a list of doctors in the Portland area that fit the search query. If the query response includes any doctors, the following information should be included about each doctor: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients. | Shane Kyong Kim | Shane Kyong Kim<br> 10819 SE Stark St, 200<br> Portland, OR 97216<br> 503-255-2291<br> https://www.ehnpc.com/dr-kim-cornea-surgeon-portland.htm#tab-1<br> Accepting new patients: Yes |
|If the query response doesn't include any doctors (for instance, if no doctors meet the search criteria), the application should return a notification that states that no doctors meet the criteria. (This is not an error so it should be handled separately from any errors.)| Doctor Strangelove | No doctors where found matching "Doctor Strangelove" |
| If the API call results in an error (any message not a 200 OK), the application should return a notification that states what the error is. | API call resulting in a 404 error | Error: 404 (Not Found) |

## Setup/Installation Requirements

* Visit the BetterDoctor API site https://developer.betterdoctor.com/ and click “Get a free API key”.
* Follow the instructions to get your API key.
* Clone or download the repository, and add a file named ".env" containing the text "exports.apiKey = [your api key]" to the project's root directory.
* Navigate to the project's local directory in a command line terminal and enter the commands "npm install" and then "npm run start".

## Known Bugs

There are no known bugs at this time.

## Support and contact details

If you find a bug, run into any issues, or have questions, ideas or concerns please feel free to submit an issue for the project here on GitHub.

## Technologies Used

* Webpack, Asynchrony, Promises, API calls, Exception Handling

### License

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Copyright (c) 2019 Benjamin Bennett-Cauchon
