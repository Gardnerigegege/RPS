// IF ELSE 
var computerChoice;
const randomIndex = Math.floor(Math.random() * 3);
if (randomIndex == 0) {
  computerChoice = "rock1";
}
else if (randomIndex == 1) {
  computerChoice = "paper1";
}
else if (randomIndex == 2) {
  computerChoice = "scissors1";
}
console.log(computerChoice)
// SWITCH
function findCompChoice(x) {
  switch(x) {
    case 0 : 
        x = "rock";
        break;
    case 1 : 
        x = "paper"
        break;
    case 2 :
        x = "scissors";
        break;
  } 
  return x;
}