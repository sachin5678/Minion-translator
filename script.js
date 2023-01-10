var input = document.querySelector("#text-input");
var btnTranslate = document.querySelector("#btn-translate");
var outputDiv = document.querySelector("#output-Div");

btnTranslate.addEventListener("click",clickhandler);

var url = "https://api.funtranslations.com/translate/minion.json";
// //var url = "https://api.funtranslations.com/translate/wow.json";
// var url = "https://api.funtranslations.com/translate/ferb-latin.json";
 function minionURL(text)
{
    return  url+ "?"+"text=" + text;
}

function clickhandler(){
    //outputDiv.innerText = "ajgdy "+"ugSJHBGHGY "+"TFGJBHJY "+"UGWDHBWgadv ";
   // outputDiv.innerText = Math.random().toString(36).slice(2, 7);
    var text = input.value;
    

    fetch(minionURL(text))
    .then(response => response.json())
    .then(convertedJSON => {
        var transaltedText = convertedJSON.contents.translated;

        outputDiv.innerText = transaltedText;
    });
    
}