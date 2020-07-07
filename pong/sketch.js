canvasWidth = 600;
canvasHeight = 400;

// variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let dBolinha = 15;
let rBolinha = dBolinha / 2;
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

// variaveis da raquete
let xRaquete = 10;
let yRaquete = 150;
let widthRaquete = 10;
let heightRaquete = 90;

colidiu = false;

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
    movimentaMinhaRaquete();
    colisaoMinhaRaqueteBiblioteca();
}

function movimentaMinhaRaquete() {
    if (keyIsDown(UP_ARROW)) {
        yRaquete -= 10;
    }
    if (keyIsDown(DOWN_ARROW)) {
        yRaquete += 10;
    }
}

function colisaoMinhaRaqueteBiblioteca() {
    colidiu = collideRectCircle(xRaquete, yRaquete, widthRaquete, heightRaquete, xBolinha, yBolinha, rBolinha);
    if (colidiu) {
        velocidadeXBolinha *= -1;
    }
}