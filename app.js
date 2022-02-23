var inputText= document.querySelector("#input-area");
var translateButton= document.querySelector("#btn-translate");
var translatedText = document.querySelector("#translated-output")

var serverURL= "https://api.funtranslations.com/translate/valyrian.json";
 
function errorHandler(error) {
    console.log(error.message);
    if(error.code=429) {
        alert("Too Many Requests: Rate limit of 5 requests per hour exceeded. Please wait ")
    }
    // alert(error.message)
    
}

translateButton.addEventListener("click", myFunction)
 function myFunction() {
     displayText = inputText.value;
     console.log(displayText);
     constructURL =serverURL+"?text="+ displayText;
     fetch(constructURL) 
     .then(response => response.json()) 
     .then((output) => {
         var tranlatedText=output.contents.translated;
     translatedText.innerText=tranlatedText;
   console.log(tranlatedText);
     }
     )
     .catch(errorHandler)
}