const express = require("express");
const bodyParser = require("body-parser");
const app = express();
// express is a framework which is used to create http servers
const port = 3000;
//app.use(bodyParser.json());

function calculateSum(counter) {
  var sum = 0;
  for (var i = 0; i < counter; i++) {
    sum = sum + i;
  }
  return sum;
}

function handleFirstRequest(req, res) {
  // hard coded but we want to send and can send data using query params, header & body.
  var counter = req.query.counter;
  var sum = calculateSum(counter);
  var answer = {
    ans: sum,
  };
  res.send(answer);
}

// function createuser(req, res) {
//   console.log("created");
//   res.send(`hello world!`);
// }
// what should be the route
app.get("/user", handleFirstRequest);
// url by defaults works on only get request
//app.post("/createuser", createuser);

function started() {
  console.log(`Example app listening on port ${port}`);
}

// exposes server to internet and open for request all time 24*7 runs infinite
// listening to all request incoming to port 3000

app.listen(port, started);

// normal sum function
