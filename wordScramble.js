function question1(){
    let html = `
         <h4 id="h4">toprar</h4>
        <input id="input" type="text" placeholder="Enter your answer in here!">
        <button onclick="answer1()">Submit</button>
        <h2 id="h2"></h2><br>
        <button onclick="question2()">Next Question</button>
    `
    document.querySelector("#div").innerHTML = html
}
function answer1(){
    let x = document.getElementById("input").value
        if(x === "parrot" || x === "Parrot"){
        document.getElementById("h2").innerHTML = "Correct!"    
    }
    else{
        document.getElementById("h2").innerHTML = "Incorrect..."
    }

}
function question2(){
    let html = `
    <h4 id="h4">giret</h4>
        <input id="input" type="text" placeholder="Enter your answer in here!">
        <button onclick="answer2()">Submit</button>
        <h2 id="h2"></h2><br>
        <button onclick="question3()">Next Question</button>
    `
    document.querySelector("#div").innerHTML = html
}
function answer2(){
    let x = document.getElementById("input").value
        if(x === "tiger" || x === "Tiger"){
        document.getElementById("h2").innerHTML = "Correct!"    
    }
    else{
        document.getElementById("h2").innerHTML = "Incorrect..."
    }
}
function question3(){
   let html = `
    <h4 id="h4">bibrat</h4>
        <input id="input" type="text" placeholder="Enter your answer in here!">
        <button onclick="answer3()">Submit</button>
        <h2 id="h2"></h2><br>
        <button onclick="question4()">Next Question</button>
    `
    document.querySelector("#div").innerHTML = html
} 
function answer3(){
    let x = document.getElementById("input").value
        if(x === "rabbit" || x === "Rabbit"){
        document.getElementById("h2").innerHTML = "Correct!"    
    }
    else{
        document.getElementById("h2").innerHTML = "Incorrect..."
    }
}
function question4(){
    let html = `
    <h4 id="h4">konemy</h4>
        <input id="input" type="text" placeholder="Enter your answer in here!">
        <button onclick="answer4()">Submit</button>
        <h2 id="h2"></h2><br>
        <button onclick="question5()">Next Question</button>
    `
    document.querySelector("#div").innerHTML = html
}
function answer4(){
    let x = document.getElementById("input").value
        if(x === "monkey" || x === "Monkey"){
        document.getElementById("h2").innerHTML = "Correct!"    
    }
    else{
        document.getElementById("h2").innerHTML = "Incorrect..."
    }
}
function question5(){
    let html = `
    <h4 id="h4">hpeelant</h4>
        <input id="input" type="text" placeholder="Enter your answer in here!">
        <button onclick="answer5()">Submit</button>
        <h2 id="h2"></h2><br>
        <button onclick="question6()">Next Question</button>
    `
    document.querySelector("#div").innerHTML = html
}
function answer5(){
    let x = document.getElementById("input").value
        if(x === "elephant" || x === "Elephant"){
        document.getElementById("h2").innerHTML = "Correct!"    
    }
    else{
        document.getElementById("h2").innerHTML = "Incorrect..."
    }
}
function question6(){
    let html = `
    <h4 id="h4">kasne</h4>
        <input id="input" type="text" placeholder="Enter your answer in here!">
        <button onclick="answer6()">Submit</button>
        <h2 id="h2"></h2><br>
        <button onclick="question7()">Next Question</button>
    `
    document.querySelector("#div").innerHTML = html
}
function answer6(){
    let x = document.getElementById("input").value
        if(x === "snake" || x === "Snake"){
        document.getElementById("h2").innerHTML = "Correct!"    
    }
    else{
        document.getElementById("h2").innerHTML = "Incorrect..."
    }
}
function question7(){
    let html = `
    <h4 id="h4">hlawe</h4>
        <input id="input" type="text" placeholder="Enter your answer in here!">
        <button onclick="answer7()">Submit</button>
        <h2 id="h2"></h2><br>
        <button onclick="question8()">Next Question</button>
    `
    document.querySelector("#div").innerHTML = html
}
function answer7(){
    let x = document.getElementById("input").value
        if(x === "whale" || x === "Whale"){
        document.getElementById("h2").innerHTML = "Correct!"    
    }
    else{
        document.getElementById("h2").innerHTML = "Incorrect..."
    }
}
function question8(){
    let html = `
    <h4 id="h4">nipgeun</h4>
        <input id="input" type="text" placeholder="Enter your answer in here!">
        <button onclick="answer8()">Submit</button>
        <h2 id="h2"></h2><br>
        <button onclick="question9()">Next Question</button>
    `
    document.querySelector("#div").innerHTML = html
}
function answer8(){
    let x = document.getElementById("input").value
        if(x === "penguin" || x === "Penguin"){
        document.getElementById("h2").innerHTML = "Correct!"    
    }
    else{
        document.getElementById("h2").innerHTML = "Incorrect..."
    }
}
function question9(){
    let html = `
    <h4 id="h4">kshar</h4>
        <input id="input" type="text" placeholder="Enter your answer in here!">
        <button onclick="answer9()">Submit</button>
        <h2 id="h2"></h2><br>
        <button onclick="question10()">Next Question</button>
    `
    document.querySelector("#div").innerHTML = html
}
function answer9(){
    let x = document.getElementById("input").value
        if(x === "shark" || x === "Shark"){
        document.getElementById("h2").innerHTML = "Correct!"    
    }
    else{
        document.getElementById("h2").innerHTML = "Incorrect..."
    }
}
function question10(){
    let html = `
    <h4 id="h4">teturl</h4>
        <input id="input" type="text" placeholder="Enter your answer in here!">
        <button onclick="answer10()">Submit</button>
        <h2 id="h2"></h2><br>
        <button onclick="question11()">Finish</button>
    `
    document.querySelector("#div").innerHTML = html
}
function answer10(){
    let x = document.getElementById("input").value
        if(x === "turtle" || x === "Turtle"){
        document.getElementById("h2").innerHTML = "Correct!"    
    }
    else{
        document.getElementById("h2").innerHTML = "Incorrect..."
    }
}
function question11(){
    let html = `
    <h2>Congratulations! You finished the game!</h2>
    `
    document.querySelector("#div").innerHTML = html
}