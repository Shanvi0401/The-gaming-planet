let score = 0
function question1(){
    let data = `
         <h3 id="h3">5*7= </h3>
        <button class="button1" onclick="answer1('40')">1. 40</button>
        <button class="button2" onclick="answer1('35')">2. 35</button>
        <button class="button3" onclick="answer1('32')">3. 32</button>
        <h2 id="h2"></h2>
        <button onclick="question2()">Next</button>
    `
    document.querySelector("#div1").innerHTML = data
}
function answer1(rightAnswer){
     if(rightAnswer === "35"){
     document.getElementById("h2").innerHTML = "Correct!"
     score +=1
     }
    else{
        document.getElementById("h2").innerHTML = "Wrong... Try get the next question right!"    
     }
 }
 function question2(){
    let data = `
         <h3 id="h3">121/11= </h3>
        <button class="button1" onclick="answer2('11')">1. 11</button>
        <button class="button2" onclick="answer2('12')">2. 12</button>
        <button class="button3" onclick="answer2('13')">3. 13</button>
        <h2 id="h2"></h2>
        <button onclick="question3()">Next</button>
    `
    document.querySelector("#div1").innerHTML = data
 }
function answer2(rightAnswer){
    if(rightAnswer === "11"){
     document.getElementById("h2").innerHTML = "Correct!"
     score +=1
     }
    else{
        document.getElementById("h2").innerHTML = "Wrong... Try get the next question right!"    
     }
}
function question3(){
    let data = `
         <h3 id="h3">26+48= </h3>
        <button class="button1" onclick="answer3('64')">1. 64</button>
        <button class="button2" onclick="answer3('74')">2. 74</button>
        <button class="button3" onclick="answer3('70')">3. 70</button>
        <h2 id="h2"></h2>
        <button onclick="question4()">Next</button>
    `
    document.querySelector("#div1").innerHTML = data
 }
function answer3(rightAnswer){
    if(rightAnswer === "74"){
     document.getElementById("h2").innerHTML = "Correct!"
     score +=1
     }
    else{
        document.getElementById("h2").innerHTML = "Wrong... Try get the next question right!"    
     }
}
function question4(){
    let data = `
         <h3 id="h3">110-52= </h3>
        <button class="button1" onclick="answer4('68')">1. 68</button>
        <button class="button2" onclick="answer4('44')">2. 44</button>
        <button class="button3" onclick="answer4('58')">3. 58</button>
        <h2 id="h2"></h2>
        <button onclick="question5()">Next</button>
    `
    document.querySelector("#div1").innerHTML = data
 }
function answer4(rightAnswer){
    if(rightAnswer === "58"){
     document.getElementById("h2").innerHTML = "Correct!"
     score +=1
     }
    else{
        document.getElementById("h2").innerHTML = "Wrong... Try get the next question right!"    
     }
}
function question5(){
    let data = `
         <h3 id="h3">4*(12-7)= </h3>
        <button class="button1" onclick="answer5('20')">1. 20</button>
        <button class="button2" onclick="answer5('16')">2. 16</button>
        <button class="button3" onclick="answer5('18')">3. 18</button>
        <h2 id="h2"></h2>
        <button onclick="question6()">Next</button>
    `
    document.querySelector("#div1").innerHTML = data
 }
function answer5(rightAnswer){
    if(rightAnswer === "20"){
     document.getElementById("h2").innerHTML = "Correct!"
     score +=1
     }
    else{
        document.getElementById("h2").innerHTML = "Wrong... Try get the next question right!"    
     }
}
function question6(){
    let data = `
         <h3 id="h3">7-4*9= </h3>
        <button class="button1" onclick="answer6('-29')">1. -29</button>
        <button class="button2" onclick="answer6('27')">2. 27</button>
        <button class="button3" onclick="answer6('29')">3. 29</button>
        <h2 id="h2"></h2>
        <button onclick="question7()">Next</button>
    `
    document.querySelector("#div1").innerHTML = data
 }
function answer6(rightAnswer){
    if(rightAnswer === "-29"){
     document.getElementById("h2").innerHTML = "Correct!"
     score +=1
     }
    else{
        document.getElementById("h2").innerHTML = "Wrong... Try get the next question right!"    
     }
}
function question7(){
    let data = `
         <h3 id="h3">1278 rounded to the nearest 100 is...</h3>
        <button class="button1" onclick="answer7('1290')">1. 1290</button>
        <button class="button2" onclick="answer7('1200')">2. 1200</button>
        <button class="button3" onclick="answer7('1300')">3. 1300</button>
        <h2 id="h2"></h2>
        <button onclick="question8()">Next</button>
    `
    document.querySelector("#div1").innerHTML = data
 }
function answer7(rightAnswer){
    if(rightAnswer === "1300"){
     document.getElementById("h2").innerHTML = "Correct!"
     score +=1
     }
    else{
        document.getElementById("h2").innerHTML = "Wrong... Try get the next question right!"    
     }
}
function question8(){
    let data = `
         <h3 id="h3">9 squared is...</h3>
        <button class="button1" onclick="answer8('3')">1. 3</button>
        <button class="button2" onclick="answer8('81')">2. 81</button>
        <button class="button3" onclick="answer8('18')">3. 18</button>
        <h2 id="h2"></h2>
        <button onclick="totalScore()">Submit</button>
    `
    document.querySelector("#div1").innerHTML = data
 }
function answer8(rightAnswer){
    if(rightAnswer === "81"){
     document.getElementById("h2").innerHTML = "Correct!"
     score +=1
     }
    else{
        document.getElementById("h2").innerHTML = "Wrong... Try get the next question right!"    
     }
}
function totalScore(){
    alert("Your total score is: " + score + " out of 8")
}

// function nextQuestion(){
//     document.getElementById("h3").innerHTML = "121/11="
//     document.getElementById("button1").innerHTML = "11"
//     document.getElementById("button2").innerHTML = "12"
//     document.getElementById("button3").innerHTML = "13"
//     if(rightAnswer === "11"){
//     document.getElementById("h2").innerHTML = "Correct!"
//     score +=1  
//     }
//     else{
//         document.getElementById("h2").innerHTML = "Wrong... Try get the next question right!"    
//     }
// }
