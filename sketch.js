let imagemCenario;
let imagemPersonagem;
let cenario; 
let somDoJogo;

function preload() {
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  imagemPersonagem = loadImage("imagens/personagem/correndo.png");
  somDoJogo= loadSound("sons/trilha_jogo.mp3");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 3);
  
  somDoJogo.loop();
  
}

function draw() { 
  cenario.exibe();
  cenario.move();
  image(imagemPersonagem,0,height - 135,110,135,0,0,220,270);
;

}

