const url = `https://animechan.vercel.app/api/random`;


function getQuote (){
     fetch(url)
    .then (res=>res.json())
    .then((user)=> {
    const cardAnime=createCard(user);
    appendCard(cardAnime);
})}


function createCard(quotesObj){
    const card = document.createElement('card')
    const characterName=document.createElement('h3');
    const quote=document.createElement('h3');
    const animeName=document.createElement('h3');

    characterName.innerHTML=`Character: ${quotesObj.character}`;
    quote.innerHTML=`${quotesObj.quote}`;
    animeName.innerHTML=`Anime: ${quotesObj.anime}`;

    card.append(characterName,quote,animeName);
    return card
}
 function appendCard (card){
    const quoteContainer=document.getElementById('quotes-container')
    quoteContainer.innerHTML=""
    quoteContainer.append(card);
}

const buttonCard=document.getElementById('get-quotes-button');
buttonCard.addEventListener('click',getQuote())
getQuote()

function showCommentButton(){
const commentButton=document.getElementById('comment-button');
commentButton.addEventListener('click', ()=>{
    createComment();
})
}
showCommentButton();

function createComment () { 
    const commentContainer = document.createElement('div')
    const inputUser = document.createElement('input')
    const inputComment = document.createElement('textarea')
    const newUserName = document.createElement('p')
    const newComment = document.createElement('p')
    const buttonComment = document.createElement('button')
    const usernameCommentContainer = document.getElementById('username-comment-container');
    
    newComment.id = "insert-comment"
    newUserName.id = "insert-user"
    inputUser.id="input-user"
    inputComment.id="input-comment"
    buttonComment.innerHTML='Submit'
    buttonComment.id="submit-comment"
    inputUser.placeholder="Username"
    inputComment.placeholder="Comment"

    buttonComment.addEventListener('click', (e) => {
        newUserName.innerText = "Username: " + inputUser.value;
        newComment.innerText = "Comment: " + inputComment.value;
        inputComment.remove();
        inputUser.remove();
        buttonComment.remove();
    })

    commentContainer.append(inputUser,inputComment,buttonComment,newUserName,newComment)
    usernameCommentContainer.append(commentContainer);
    return commentContainer;
}

function createLike (){
    const likeButton=document.getElementById('like-button');
    const counter=document.getElementById('like-counter');
    counter.style.visibility="hidden"
    likeButton.addEventListener('click',()=> {
    
        counter.value= parseInt(counter.value)+1, 
        likeButton.innerText=`Like ❤ ${counter.value}`, 
        counter.remove();
}, false)
}
createLike();