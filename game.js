const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

window.addEventListener('load', startGame);
window.addEventListener('resize', startGame);


function startGame() {
    
  let canvasSize;

  if (window.innerHeight > window.innerWidth) {
    canvasSize = innerWidth * 0.8;
  } else {
    canvasSize = innerHeight * 0.8;
  }
  
  canvas.setAttribute('width', canvasSize);
  canvas.setAttribute('height', canvasSize);

  const elementSize = canvasSize / 10;
  game.textAlign = 'end';
  game.font = elementSize + 'px Verdana';

    for (i=0; i <= 10; i++) {

        game.fillText(emojis['X'], elementSize, elementSize*i)
    }

}