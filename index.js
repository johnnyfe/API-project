const url = `https://animechan.vercel.app/api/random`;

function getQuote (){
    const confObj = {
        method:"GET"
    }
    fetch(url,confObj)
    .then (res=>res.json())
    .then (obj=>{createCard(obj)})
}
getQuote();

function createCard(quotesObj){
    const quoteContainer=document.getElementById('quotes-container')
    const card = document.createElement('card')
    const buttonCard=document.getElementById('get-quotes-button');

    const characterName=document.createElement('h3');
    const quote=document.createElement('h3');
    const animeName=document.createElement('h3');

    characterName.innerHTML=`${quotesObj.character}`;
    quote.innerHTML=`${quotesObj.quote}`;
    animeName.innerHTML=`${quotesObj.anime}`;

    quoteContainer.appendChild(card);
    buttonCard.addEventListener('click',()=>{
        card.append(characterName,quote,animeName);
        buttonCard.remove();
    })
}
