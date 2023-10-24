//VARIAVEIS BOLINHA
let xBolinha = 300; //horizontal bolinha
let yBolinha = 200;  //vertical bolinha
let diametro = 30;  //tamanho da bolinha
let raio = diametro / 2; //tamanho do raio

//VARIAVEIS RAQUETE
let xRaquete = 5;
let yRaquete = 150;
let RaqueteComprimento = 10;
let RaqueteAltura = 90;
let colidiu = false;
//VELOCIDADE
let velocidadeXBolinha = 6 
let velocidadeYBolinha = 6  

function setup() {
  createCanvas(600, 400);  
}

//EXECUÇÃO
function draw() { 
  background(0);
  mostraBolinha ();
  movimentaBolinha ();
  verificaColisãoBorda ();
  MostrarRaquete ();
  MovimentaMinhaRaquete ();
  ColisaoRaquete ();
  //colisaoMinhaRaqueteBiblioteca();
  }

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
}


function movimentaBolinha (){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}


function verificaColisãoBorda (){
   if (xBolinha + raio > width || xBolinha - raio < 0){ //width representa a borda direita
    velocidadeXBolinha *= -1; //alt + 124 para fazer a barra vertical
  }
  if (yBolinha + raio > height || yBolinha - raio < 0){ // height representa borda superior
    velocidadeYBolinha *= -1;
  }
}

function MostrarRaquete (){
  rect (xRaquete, yRaquete, RaqueteComprimento, RaqueteAltura);
}

function MovimentaMinhaRaquete () {
  if (keyIsDown(UP_ARROW)) { //tecla pressionada
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) { //tecla pressionada
    yRaquete += 10;
  }
}

function ColisaoRaquete (){ //colisão no canto da raquete subtrai o raio
  if (xBolinha - raio < xRaquete + RaqueteComprimento && yBolinha - raio < yRaquete + RaqueteAltura && yBolinha + raio < yRaquete + RaqueteAltura) {
    velocidadeXBolinha *= -1;
  }
}

/*function colisaoMinhaRaqueteBiblioteca() {
  colidiu =
  collideRectCircle(xRaquete, yRaquete, RaqueteComprimento, RaqueteAltura, xBolinha, yBolinha, raio);
  if (colidiu) {
    velocidadeXBolinha *= -1;
  }*/
