document
  .querySelector(".request-complement")
  .addEventListener("click", function() {
    fetch("/complement") //call api the response is app.get("/complement") in express_server.js
      .then(function(response) {
        return response.json(); //receive a textblob and convert to json
      })
      .then(function(data) {
        document.querySelector(".some-text").innerText = data.complement;
      }) //update the complement class p tag with a random complement
      .catch(function(err) {
        console.error(err);
      });
  });
