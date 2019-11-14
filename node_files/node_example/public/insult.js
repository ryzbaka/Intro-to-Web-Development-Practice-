document
  .querySelector(".request-insult") //select the insult button
  .addEventListener("click", function() {
    fetch("/insult")
      .then(function(response) {
        //here response is what you get when fetch and API call
        return response.json();
      })
      .then(function(data) {
        document.querySelector(".some-text").innerText = data.insult;
      })
      .catch(function(err) {
        console.error(err);
      });
  });
