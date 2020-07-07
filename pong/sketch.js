canvasWidth = 600
canvasHeight = 400

let xBolinha = 300;
let yBolinha = 200;
let dBolinha = 15;
let rBolinha = dBolinha / 2;

let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

function criaBolinha(x, y, d) {
    circle(x, y, d);
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
}