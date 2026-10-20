let user = []
let computer = []
let winningCombinations=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]
function userChoice(n) {
  if (user.includes(n) || computer.includes(n)){
    return
  }
  document.getElementById("h" + n).innerHTML = "X"
  user.push(n)
  let computerChoice
  do{
    computerChoice = Math.floor(Math.random()*9)
  }
  while(user.includes(computerChoice) || computer.includes(computerChoice))
  computer.push(computerChoice)
  document.getElementById("h" + computerChoice).innerHTML = "O"
  if(checkWinner(user)){
    document.getElementById("answer").innerHTML="Congratulations! You've won the game!"
    return
  }
  if(checkWinner(computer)){
    document.getElementById("answer").innerHTML="Oops!The computer beat you!"
    return
  }
  if(user.length +computer.length===9){
    document.getElementById("answer").innerHTML="It's a tie!"
    return

  }
}

function checkWinner(list){
  for(let x of winningCombinations){
    if(list.includes(x[0]) && list.includes(x[1]) && list.includes(x[2])){
      return true
    }
  }
  return false
}
