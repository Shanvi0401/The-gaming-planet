let arr = ['rock','paper','scissor']
let image = ["https://cdn.pixabay.com/photo/2022/03/08/02/05/rock-7054897_1280.png","https://static.vecteezy.com/system/resources/previews/010/851/397/original/white-sheet-of-paper-png.png","https://static.vecteezy.com/system/resources/previews/069/994/541/non_2x/illustration-of-red-open-scissors-cartoon-free-png.png"]
function close(){
    document.getElementById("div").style.display = "none"
    document.getElementById("main").style.opacity = "1"
}
function game(n){
let userChoice = arr[n]
let userImage = image[n]
let rand = Math.floor(Math.random()*arr.length)
let computerChoice = arr[rand]
let computerImage = image[rand]
let body = document.querySelector("#div2")
let data = `
<center>
<table>
<tr>
<th>Your choice</th>
<th>Computer choice</th>
</tr>
<tr>
<td>
<img src=${userImage} ></td>
<td><img src=${computerImage}></td>
</tr>
</table>
</center>
`
body.innerHTML=data

if(userChoice === "rock" && computerChoice === "rock"  ||  userChoice === "paper" && computerChoice === "paper" || userChoice === "scissor" && computerChoice === "scissor"){
    let x = document.querySelector("#div")
    button = `<h4>It's a tie</h4><button onclick = "close()">Go back</button>`
    x.innerHTML = button
    document.getElementsClassName("main").style.opacity = "0.2"
}

else if(userChoice === "rock" && computerChoice === "paper" || userChoice === "paper" && computerChoice === "scissor" || userChoice === "scissor" && computerChoice === "rock"){
    let x = document.querySelector("#div")
    button = `<h4>Computer has won</h4><button onclick = "close(}">Go back</button>`
    x.innerHTML = button
    document.getElementsClassName("main").style.opacity = "0.2"
}

else{
    let x = document.querySelector("#div")
    button = `<h4>You have won</h4><button onclick = "close()">Go back</button>`
    x.innerHTML = button
    document.getElementsClassName("main").style.opacity = "0.2"
}
}
