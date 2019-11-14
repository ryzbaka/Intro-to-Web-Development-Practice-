const BREEDS_URL = "https://dog.ceo/api/breeds/image/random";

function doWhenImageReceived(reponse){
  getNextImage.next(reponse)
}
function *createFlow(){
  const data=yield fetch(BREEDS_URL)
  console.log(data)
}
const getNextImage=createFlow()
const imagePromise=getNextImage.next()

imagePromise.then(doWhenImageReceived)


/*<--remove this
const promise = fetch(BREEDS_URL);
//fetch is an AJAX url to make calls to API links
//a fetch returns a promise
//A promise is a function that runs later in an asynchronous manner.

promise
  .then(function(response) {
    //this is us telling which function to run when the promise resolves.
    const processedPromise = response.json(); //the .json() function processes the received blob of text into json
    return processedPromise;
  })
  .then(function(processedPromise) {
    /*console.log(processedPromise);
    const imageBox = document.querySelector(".image-box");
    imageBox.innerHTML = `<img src="${processedPromise.message}"/>`;
    --another way of doing it.*/
/*<--remove this    const doggos=document.querySelector(".image-box")
    const img=document.createElement("img")//creating an image element
    img.src=processedPromise.message//setting its
    img.alt='cute doggo'//attributes.
    doggos.appendChild(img)//appending the img element to our div element
});
*///<--remove this