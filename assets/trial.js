class Player {
  constructor(choice, against){
    this.choice = choice;
    this.against = against;
  }

  play(){
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

const versus = new Player('gunting', 'batu')
console.log(versus.play())