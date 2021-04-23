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
function showCommentButton(){
const commentButton=document.getElementById('comment-button');
commentButton.addEventListener('click', ()=>{
    createComment();
})
}
showCommentButton();

const createComment = (user) => { 
    const commentContainer = document.createElement('div')
    const inputUser = document.createElement('input')
    const inputComment = document.createElement('input')
    const newUserName = document.createElement('p')
    const newComment = document.createElement('p')
    const buttonComment = document.createElement('button')
    const usernameCommentContainer = document.getElementById('username-comment-container');
    
    newComment.id = "insert-comment"
    newUserName.id = "insert-user"
    inputUser.id="input-user"
    inputComment.id="input-comment"
    buttonComment.innerHTML='Submit'
    inputUser.placeholder="Username"
    inputComment.placeholder="Comment"

    buttonComment.addEventListener('click', () => {
        newUserName.innerText = "Username: " + inputUser.value;
        newComment.innerText = "Comment: " + inputComment.value;
    })

    commentContainer.append(inputUser,inputComment,buttonComment,newUserName,newComment)
    usernameCommentContainer.append(commentContainer);
    return commentContainer;
}
