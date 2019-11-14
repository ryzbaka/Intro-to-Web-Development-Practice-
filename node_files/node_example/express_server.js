//Including libraries
const express = require("express");
const path = require("path"); //handles relative paths

const complements = ["you like nice today", "nice dress!", "you made this"]; //array of complements

function getRandomComplement() {
  const randomIndex = Math.floor(Math.random() * complements.length);
  //random returns a random number between 1 and 0
  //multiplying that with the length of the array and flooring it
  //gives a random index
  return complements[randomIndex];
}

const insults = [
  "Fuck you",
  "Your life is meaningless",
  "I hate you.",
  "You're a fraud"
];
function getRandomInsult() {
  const randomIndex = Math.floor(Math.random() * insults.length);
  return insults[randomIndex];
}

const app = express(); //create an express server

app.get("/", function(req, res) {
  //if user requests for "localhost:5500/"
  console.log(req.url);
  res.sendFile(path.join(__dirname, "index.html"));
  //add path of index.html to current path and send the index.html file to browser
});

app.get("/something", function(req, res) {
  console.log(req.url);
  res.sendFile(path.join(__dirname, "something.html"));
});

app.get("/complement", function(req, res) {
  //if user requests for "localhost:5500/complement"(API call)
  console.log(req.url);
  res
    .json({
      //responding with a javascript object
      complement: getRandomComplement()
    })
    .end(); //end request
});

app.get("/insult", function(req, res) {
  console.log(req.url);
  res
    .json({
      insult: getRandomInsult()
    }) //respond to API call for /insult
    .end(); //ended request
});

app.use("/public", express.static("./public")); //public data for javascript, html and css files. Don't put private data there

const somePort = 5500;

app.listen(somePort);
console.log(`listening on port ${somePort}`);
