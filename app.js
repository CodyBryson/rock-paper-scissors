const results = {
  slash: {
    name: 'slash',
    img: 'sword.png'
  },
  shoot: {
    name: 'shoot',
    img: 'bow.png'
  },
  defend: {
    name: 'defend',
    img: 'shield.png'
  },
}

function play() {
  let playerChoice = results[name]
  let computerNumber = Math.floor(Math.random() * 10);

  if (computerNumber < 3) {
    let computerChoice = 'slash';
  } else if (computerNumber <= 6) {
    let computerChoice = 'shoot';
  } else {
    let computerChoice = 'defend';
  }
  let result = checkWinner(playerChoice, computerChoice);

  if (result === 'draw') {
    document.getElementById('result').innerHTML = `
    <h3 class ="text-light">"You have finally found a worthy adversary!"</h3>
    <img src="knight-with-sword-and-shield-icon.png" alt="">
    <h3 class = "text-light">"Draw!"</h3>`
  }
  if (result === 'youCut') {
    document.getElementById('result').innerHTML = `
    <h3 class ="text-light">"Your blade is true. Your opponent falls to your swift strike!"</h3>
    <img src="sword.png" alt=""><span class = "p-2 mx-2"></span><img src="bow.png" alt="">
    <h3 class = "text-light">"You Win!"</h3>`
  }
  if (result === 'getBlocked') {
    document.getElementById('result').innerHTML = `
    <h3 class ="text-light">"Your blade rings against a solid defense. Your opponent takes your head!"</h3>
    <img src="sword.png" alt=""><span class = "p-2 mx-2"></span><img src="shield.png" alt="">
    <h3 class = "text-warning">"You Lose!"</h3>`
  }
  if (result === 'getCut') {
    document.getElementById('result').innerHTML = `
    <h3 class ="text-light">"You feel cold steel in your chest. Your opponent's blade is too swift!"</h3>
    <img src="bow.png" alt=""><span class = "p-2 mx-2"></span><img src="sword.png" alt="">
    <h3 class = "text-warning">"You Lose!"</h3>`
  }
  if (result === 'youShoot') {
    document.getElementById('result').innerHTML = `
    <h3 class ="text-light">"You spot the gaps in your opponent's defense. Your arrow finds the mark!"</h3>
    <img src="bow.png" alt=""><span class = "p-2 mx-2"></span><img src="shield.png" alt="">
    <h3 class = "text-light">"You Win!"</h3>`
  }
  if (result === 'youBlock') {
    document.getElementById('result').innerHTML = `
    <h3 class ="text-light">"You bat away your opponent's meager blows. Your follow-up strike lays them at your feet."</h3>
    <img src="shield.png" alt=""><span class = "p-2 mx-2"></span><img src="sword.png" alt="">
    <h3 class = "text-light">"You Win!"</h3>`
  }
  if (result === 'getShot') {
    document.getElementById('result').innerHTML = `
    <h3 class ="text-light">"Your defenses are too slow. Your opponent's arrow pierces your heart!"</h3>
    <img src="shield.png" alt=""><span class = "p-2 mx-2"></span><img src="bow.png" alt="">
    <h3 class = "text-warning">"You Lose!"</h3>`
  }

  function checkWinner(player, computer) {
    if (player === computer) {
      return 'draw';
    }
    if (player === 'slash') {
      if (computer === 'shoot') {
        return 'youCut'
      }
    }
    if (player === 'slash') {
      if (computer === 'defense') {
        return 'getBlocked'
      }
    }
    if (player === 'shoot') {
      if (computer === 'slash') {
        return 'getCut'
      }
    }
    if (player === 'shoot') {
      if (computer === 'defense') {
        return 'youShoot'
      }
    }
    if (player === 'defense') {
      if (computer === 'slash') {
        return 'youBlock'
      }
    }
    if (player === 'defense') {
      if (computer === 'shoot') {
        return 'getShot'
      }
    }
  }

}

play()




// <img src="${animal.img}" alt="animal image">`
// if (playerChoice == computerChoice){
// console.log( "You have finally found an equal match!")
//}if(playerChoice === 'slash' && computerChoice === 'shoot'){
//console.log( "Your blade is true. Your opponent falls to your swift strike!");
//}
//if(playerChoice === 'slash' && computerChoice === 'defend'){
//console.log( "Your blade rings against a solid defense. Your opponent takes your head!");
//}
//if(playerChoice === 'shoot' && computerChoice === 'slash'){
//console.log( "You feel cold steel in your chest. Your opponent's blade is too swift!")
//}if(playerChoice === 'shoot' && computerChoice === 'defend'){
//console.log( "You spot the gaps in your opponent's defense. Your arrow finds flesh!")
//}
//if(playerChoice === 'defend' && computerChoice == 'slash'){
//console.log( "You bat away your opponent's meager blows. Your follow-up strike lays them at your feet.")
//}
//else{
//console.log ("Your defense is too slow. Your opponent's arrow pierces your neck!")
//}




//#region 
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml7 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
//#region 
anime.timeline({ loop: true })
  .add({
    targets: '.ml7 .letter',
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 750,
    easing: "easeOutExpo",
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml7',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 10000
  });
//#endregion
//#endregion