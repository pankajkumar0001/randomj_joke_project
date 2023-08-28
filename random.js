const jokecontainer= document.getElementById("joke");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
const btn =document.getElementById("btn");

let getjoke =()=>{
    fetch(url1)
    .then(data=> data.json())
    .then(item=>{
       jokecontainer.innerText =`${item.joke}`;
    })
    .catch(()=>{
        console.log("Error")
    })
    
}
btn.addEventListener("click",getjoke)

