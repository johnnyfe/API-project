const url = `https://animechan.vercel.app/api/random`;

function getQuote (){
    const confObj = {
        method:"GET"
    }
    fetch(url,confObj)
    .then (res=>res.json())
    .then (obj=>createCard(obj))
}
getQuote();
