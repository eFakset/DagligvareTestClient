const fetch = require("node-fetch");
const vars = require("../utils/variables");
const path = "/kasser";

// GET
test(`Fetch from ${path} and check status code ${vars.expectedStatusCode}.`, (done) => {
  fetch("http://localhost:" + vars.port.toString() + path)
    .then((response) => {
      expect(response.status).toBe(vars.expectedStatusCode);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      done();
    })
    .catch((error) => {
      console.error(error);
      done(error);
    });
});
