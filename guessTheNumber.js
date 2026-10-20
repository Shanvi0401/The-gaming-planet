let x = Math.floor(Math.random()*20)
function guessNumber(){
    let y = document.getElementById("input").value
    if(x>y){
        document.getElementById("h4").innerHTML = "Low. Try higher"
    }
    else if(x==y){
        document.getElementById("h4").innerHTML = "Correct!"
    }
        else if(x<y){
            document.getElementById("h4").innerHTML = "Too high. Try lower"
        }

}
function restart(){
    x = Math.floor(Math.random()*20)
    document.getElementById("form").reset()
    document.getElementById("h4").innerHTML = ""
}