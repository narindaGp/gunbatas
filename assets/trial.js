class Player {
  constructor(choice, against){
    this.choice = choice;
    this.against = against;
  }

  versusCom(){
    const comChoice = Math.floor(Math.random()*3);
    if(comChoice == 0){
      this.against = 'batu'
    } else if (comChoice == 1){
      this.against = 'kertas'
    } else if (comChoice == 2){
      this.against = 'gunting'
    }

    console.log(comChoice, this.choice, this.against)
    if (this.choice == 'batu') {
      
      switch (this.against) {
        case 'batu':
          return 'draw'
          break;
        case 'kertas':
          return 'lose'
          break;
        case 'gunting':
          return 'win'
          break;
      
        default:
          return 'cek input'
          break;
      }
    } else if (this.choice == 'kertas') {
      
      switch (this.against) {
        case 'batu':
          return 'win'
          break;
        case 'kertas':
          return 'draw'
          break;
        case 'gunting':
          return 'lose'
          break;
      
        default:
          return 'cek input'
          break;
      }
    } else if (this.choice == 'gunting') {
      
      switch (this.against) {
        case 'batu':
          return 'lose'
          break;
        case 'kertas':
          return 'win'
          break;
        case 'gunting':
          return 'draw'
          break;
      
        default:
          return 'cek input'
          break;
      }
    } 
  }
}

const play = new Player('gunting')
console.log(play.versusCom())