canvasWidth = 600;
canvasHeight = 400;

// variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let dBolinha = 20;
let rBolinha = dBolinha / 2;
let velocidadeXBolinha = 10;
let velocidadeYBolinha = 10;

// variaveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let widthRaquete = 10;
let heightRaquete = 90;

// variaveis do da raqueta oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

// placar do jogo
let meusPontos = 0;
let pontosOponente = 0;


function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

function criaBolinha(x, y, diameter) {
    circle(x, y, diameter);
}

function criaRaquete(x, y, width, height) {
    rect(x, y, width, height)
}

function movimentaBolinha(velocidadeX, velocidadeY) {
    xBolinha += velocidadeX;
    yBolinha += velocidadeY;
}

function verificaColisaoBorda() {
    if ((xBolinha + rBolinha) > canvasWidth || xBolinha < 0) velocidadeXBolinha *= -1;
    if ((yBolinha + rBolinha) > canvasHeight || yBolinha < 0) velocidadeYBolinha *= -1;
}

function draw() {
    background(0);
    criaBolinha(xBolinha, yBolinha, dBolinha);
    movimentaBolinha(velocidadeXBolinha, velocidadeYBolinha);
    verificaColisaoBorda();
    criaRaquete(xRaquete, yRaquete, widthRaquete, heightRaquete);
    criaRaquete(xRaqueteOponente, yRaqueteOponente, widthRaquete, heightRaquete);
    movimentaMinhaRaquete();
    movimentaRaqueteOponente();
    verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
    verificaColisaoRaquete(xRaquete, yRaquete);
    incluiPlacar();
    marcaPonto();
}

function movimentaMinhaRaquete() {
    if (keyIsDown(UP_ARROW)) {
        yRaquete -= 10;
    }
    if (keyIsDown(DOWN_ARROW)) {
        yRaquete += 10;
    }
}

colidiu = false;
function verificaColisaoRaquete(x, y) {
    colidiu = collideRectCircle(x, y, widthRaquete, heightRaquete, xBolinha, yBolinha, rBolinha);
    if (colidiu) velocidadeXBolinha *= -1;
}

function movimentaRaqueteOponente() {
    velocidadeYOponente = yBolinha - yRaqueteOponente - (widthRaquete/2) - 30;
    yRaqueteOponente += velocidadeYOponente;
}

function incluiPlacar() {
    fill(255);
    text(meusPontos, 278, 26);
    text(pontosOponente, 321, 26)
}

function marcaPonto() {
    if (xBolinha > 599) {
        meusPontos += 1;
    }
    if (xBolinha < 1) {
        pontosOponente += 1;
    }
}