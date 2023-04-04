console.log("Hi");

const stringSeparation = document.querySelector('#stringSeparation')
const stringSeparationPosition = document.querySelector('#stringSeparationPosition')
const beforePosition = document.querySelector('#beforePosition')
const afterPosition = document.querySelector('#afterPosition')
const resultFirstPart = document.querySelector('#resultFirstPart')
const resultSecondPart = document.querySelector('#resultSecondPart')

document.body.addEventListener ("keyup", (event) => {
        let text = stringSeparation.value
        let word = stringSeparationPosition.value

         if(event.key === "Enter" && text.indexOf(word) === -1) { 
                resultFirstPart.innerHTML = `Wort nicht gefunden`}
                else if (event.key === "Enter" && beforePosition.checked) {       
        resultFirstPart.innerHTML = `${text.substring(0,text.indexOf(word))}`
        resultSecondPart.innerHTML = `${text.substring(text.indexOf(word))}`} 
        
        else if(event.key === "Enter" && afterPosition.checked){
        resultFirstPart.innerHTML = `${text.substring(0,text.indexOf(word))+word}`
        resultSecondPart.innerHTML = `${text.substring(text.indexOf(word)).replace(word,"")}`
        } 
        
});
