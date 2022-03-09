var mario
var marioImage
var fundo
var nuvem1
var nuvem2
var imagemNuvem1
var imagemNuvem2

function preload(){
    fundo = loadImage("marioceu.png")
    marioImage = loadAnimation("marioandano.png","marioparado.png")
    imagemNuvem1 = loadImage("marionuvens1.png")
    imagemNuvem2 = loadImage("marionuvens2.png")
}
function setup(){
    createCanvas(800,400)
    mario=createSprite(30,259,15,35)
    mario.addAnimation("andando",marioImage)
    mario.scale = 0.10
    /*nuvem1=createSprite(200,90,24,57)
    nuvem1.addImage(imagemNuvem1)
    nuvem1.scale = 0.50
    nuvem2=createSprite(600,90,24,57)
    nuvem2.addImage(imagemNuvem2)
    nuvem2.scale = 0.30*/

}
function draw(){
    background(fundo)
    drawSprites()
    gerarNuvens()
}
function gerarNuvens() {
    //escreva o código aqui para gerar as nuvens 
    if (frameCount % 60 === 0) {
        var nuvem = createSprite(200,90,24,57);
        nuvem.velocityX = -8
        nuvem.scale = 0.5;
        nuvem.lifetime = 300
        
        var rand = Math.round(random(1,2));
        switch(rand) {
            case 1: nuvem.addImage(imagemNuvem1)
            break;
            case 2: nuvem.addImage(imagemNuvem2)
            break;
    default: break;}
    }
}
