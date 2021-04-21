const url = `https://animechan.vercel.app/api/random`;
function getQuote (){
    const confObj = {
        method:"GET"
    }
    fetch(url,confObj)
    .then (res=>res.json())
    .then((user)=> {
    const cardAnime=createCard(user);
    appendCard(cardAnime);
})
}
getQuote();

function createCard(quotesObj){
    const card = document.createElement('card')
    const characterName=document.createElement('h3');
    const quote=document.createElement('h3');
    const animeName=document.createElement('h3');

    characterName.innerHTML=`${quotesObj.character}`;
    quote.innerHTML=`${quotesObj.quote}`;
    animeName.innerHTML=`${quotesObj.anime}`;

    card.append(characterName,quote,animeName);
    return card
}
 function appendCard (card){
    const quoteContainer=document.getElementById('quotes-container')
    const buttonCard=document.getElementById('get-quotes-button');
    buttonCard.addEventListener('click',()=>{
        quoteContainer.append(card);
        buttonCard.remove();
    })
    return quoteContainer
}