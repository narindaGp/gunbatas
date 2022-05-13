class Player {
  constructor(choice, against){
    this.choice = choice;
    this.against = against;
  }

  versusCom(){
    const gunbatas = ['batu', 'kertas', 'gunting'];
    const comChoice = Math.floor(Math.random()*3);
    this.against = gunbatas[comChoice]   
    
    console.log(gunbatas[this.choice], 'vs', this.against)
    if (this.choice == comChoice) {
      return 'draw'
    } else if (this.choice - comChoice == 1 || this.choice - comChoice == -2) {
      return 'win'
    } else if (this.choice - comChoice == -1 || this.choice - comChoice == 2) {
      return 'lose'
    } else {
      return 'error'
    }
  }
}

class Computer extends Player{

}

function suit(choice){
  const play = new Player(choice);
  console.log(play.versusCom())
}


