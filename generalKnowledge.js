let score = 0
function answer1(correctAnswer){
    if(correctAnswer === "paris"){
        document.getElementById("h41").innerHTML = "Correct!Amazing!"
        document.getElementById("h41").style.color = "green"
        
        score +=1
    }
    else{
        document.getElementById("h41").innerHTML = "Wrong..."
        document.getElementById("h41").style.color = "red"
    }
}
function answer2(correctAnswer){
    if(correctAnswer === "Pacific Ocean"){
        document.getElementById("h42").innerHTML = "Correct!Amazing!"
        document.getElementById("h42").style.color = "green"
         score +=1
    }
    else{
        document.getElementById("h42").innerHTML = "Wrong..."
        document.getElementById("h42").style.color = "red"
    }
}
    function answer3(correctAnswer){
    if(correctAnswer === "mars"){
        document.getElementById("h43").innerHTML = "Correct!Amazing!"
        document.getElementById("h43").style.color = "green"
        score +=1
    }
    else{
        document.getElementById("h43").innerHTML = "Wrong..."
        document.getElementById("h43").style.color = "red"
    }
}
function answer4(correctAnswer){
    if(correctAnswer === "7"){
        document.getElementById("h44").innerHTML = "Correct!Amazing!"
        document.getElementById("h44").style.color = "green"
        score +=1
    }
    else{
        document.getElementById("h44").innerHTML = "Wrong..."
        document.getElementById("h44").style.color = "red"
    }
}
function answer5(correctAnswer){
    if(correctAnswer === "leonardo da vinci"){
        document.getElementById("h45").innerHTML = "Correct!Amazing!"
        document.getElementById("h45").style.color = "green"
        score +=1
    }
    else{
        document.getElementById("h45").innerHTML = "Wrong..."
        document.getElementById("h45").style.color = "red"
    }
}
function finalScore(){
    alert("Your final score is:" + score)
}
