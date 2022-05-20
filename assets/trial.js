const gunbatas = ['Batu', 'Kertas', 'Gunting'];
class Player {
  #choice
  #against
  constructor(choice, against){
    if (this.constructor === Player){
      throw new Error('This class is abstract')
    }
    this.#choice = choice;
    this.#against = against;
  }
  
  game(choice, against) {
    const result = [choice, against]
    if (choice == against) {
      result.push('Draw')
    } else if (choice - against == 1 || choice - against == -2) {
      result.push('Win')
    } else if (choice - against == -1 || choice - against == 2) {
      result.push('Lose')
    } else {
      result.push('Error')
    }
    return result
  }
  
  logAnnouncement(choice, against, outcome) {
    const player = gunbatas[choice];
    const computer = gunbatas[against] 
    console.log(player, 'vs', computer)
  }
  
  versusCom(){
    const comChoice = Math.floor((Math.random()*3)-0.0000001);
    this.#against = comChoice   
    const result = this.game(this.#choice, this.#against)
    this.logAnnouncement(this.#choice, this.#against, result[2]);
    return result
  }
}

class PlayerOne extends Player{
  constructor(choice, against) {
    super(choice, against)
  }
  
  logAnnouncement(choice, against, outcome){
    super.logAnnouncement(choice, against, outcome);
    console.log(`player memilih  ${gunbatas[choice]} dan computer memilih ${gunbatas[against]}, hasilnya pertandingannya berujung pada ${outcome}`)
  }
}

function matchID(id){
  if (typeof window !== 'undefined') {
    return document.getElementById(id)
  }
}

let isPlaying = false;

function suit(input){
  if (isPlaying) return;
  isPlaying = true;
  const play = new PlayerOne(input);
  const [choice, against, outcome] = play.versusCom()

  let playerChoice = matchID(`player${gunbatas[choice]}`)
  playerChoice.classList.toggle("choiceActive");
  
  let rivalChoice = matchID(`rival${gunbatas[against]}`)
  rivalChoice.classList.toggle("choiceActive")
  
  anounceResult(outcome)
  document.querySelector(div.player>button).disabled = true;
}

function anounceResult(outcome) {
  const result = ['Draw', 'Win', 'Lose']
  matchID('versus').style.display = 'none';
  for (let i = 0; i < result.length; i++) {
    matchID(`result${result[i]}`).style.display = 'none';
  }
  matchID(`result${outcome}`).style.display = 'flex';
}

function reset() {
  location.reload();
}