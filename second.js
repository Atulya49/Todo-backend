// worked with fd
// worked with express npm install bosy-parse used postman
// and now 3rd external libaray fetch\
function log(x) {
  console.log(x);
}
function rec(result) {
  result.json().then(log);
}
var sendobj = {
  method: "GET",
};
fetch("http://localhost:3000/user?counter=1000", sendobj).then(rec);
