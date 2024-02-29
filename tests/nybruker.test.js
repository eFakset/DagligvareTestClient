const fetch = require("node-fetch");
const vars = require("../utils/variables");
const path = "/nybruker";

const user = {
  User: {
    userName: "testUser",
    password: "testPassword",
    userType: "A",
  },
};
const postRequestOptions = {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(user),
};

// PUT
test(`Create new user on ${path} and check status code ${vars.expectedStatusCode}.`, (done) => {
  fetch("http://localhost:" + vars.port.toString() + path, postRequestOptions)
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
