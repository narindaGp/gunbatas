const gunbatas = ['Batu', 'Kertas', 'Gunting'];
class Player {
  constructor(choice, against){
    this.choice = choice;
    this.against = against;
  }
  
  versusCom(){
    const comChoice = Math.floor(Math.random()*3);
    this.against = comChoice   
    
    console.log(this.against)
    
    const result = [this.against]
    console.log(gunbatas[this.choice], 'vs', gunbatas[this.against])
    if (this.choice == this.against) {
      result.push('draw')
    } else if (this.choice - this.against == 1 || this.choice - this.against == -2) {
      result.push('win')
    } else if (this.choice - this.against == -1 || this.choice - this.against == 2) {
      result.push('lose')
    } else {
      result.push('error')
    }
    return result
    console.log(result)
  }
}

class Computer extends Player{

}

function matchID(id){
  if (typeof window !== 'undefined') {
    return document.getElementById(id)
  }
}

function suit(choice){
  const play = new Player(choice);
  const [against, outcome] = play.versusCom()

  let playerChoice = matchID(`player${gunbatas[choice]}`)
  playerChoice.classList.toggle("choiceActive");

  let rivalChoice = matchID(`rival${gunbatas[against]}`)
  rivalChoice.classList.toggle("choiceActive")

  let suitResult
  console.log(outcome)
  matchID('versus').style.display = 'none';
  matchID('resultDraw').style.display = 'none';
  matchID('resultWin').style.display = 'none';
  matchID('resultLose').style.display = 'none';
  switch (outcome) {
    case 'draw':
      matchID('resultDraw').style.display = 'flex';
      break;
    case 'win':
      matchID('resultWin').style.display = 'flex';
      break;
    case 'lose':
      matchID('resultLose').style.display = 'flex';
      break;
  }
}
