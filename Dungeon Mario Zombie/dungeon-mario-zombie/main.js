
// Canvas
var canvas;
var ctx;
var fps = 50;
var ON = true;

// Buttons
var buttonPlay;
var buttonOtherL;
var buttonPlayA;
var buttonLevel1;
var buttonLevel2;
var buttonKeep;

// Pause
var pause = false;
var move = true;
var canPause = false;

// Images
var imgPrincipal;
var winimg;
var lostimg;
var imgfinal;
var enemyImg;
var imglevels;
var pauseimg;
var img;

// Divs
var container;
var levelCanvas;

// Character
var protagonista;
var character;

// Animate
    // Torch
    var torchFisic;
    var torchImg1; 
    var torchImg2; 
    var torchImg3; 
    var torchImg4; 

    // Key
    var landKey1; 
    var landKey2;
    var landKey3; 
    var landKey4;
    var landKey5; 
    var landKey6; 

// Materials
var stone;
var land; 
var door;
var checkpoint;

// Width & Heigth Canvas
var width = 50; 
var heigth = 50;

// Arrays
var keys = [];
var enemies = [];
var torchs = [];
var checkpoints = ["0"];

// var stage = [
//     [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//     [0,6,1,0,0,0,0,1,1,1,1,0,0,1,1,0],
//     [0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0],
//     [0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0],
//     [0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0],
//     [0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0],
//     [0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0],
//     [0,1,1,1,0,0,0,1,0,0,0,3,0,0,1,0],
//     [0,1,5,2,0,0,0,1,0,0,1,1,1,1,1,0],
//     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
// ];

// Stage

var stage = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];

function styleDisplay(a,b){
    if(b=="n"){
        a.style = "display:none";
    }
    else if(b=="b"){
        a.style = "display:block";
    }
}

function showLevels(){
    // Imagen de perder y ganar
    styleDisplay(container,"n");
    styleDisplay(buttonPlayA,"n");
    styleDisplay(buttonOtherL,"n");
    styleDisplay(img,"b");
    styleDisplay(imgfinal,"n");
    ON = false;
    move = false;
    canPause = false;
    imgfinal.src = '';

    // Imagen de niveles, usando el img
    img.src = imglevels.src;

    // Botones
    styleDisplay(buttonLevel1,"b");
    styleDisplay(buttonLevel2,"b");

    // On click
    buttonLevel1.onclick = function(){
        styleDisplay(container,"n");
        styleDisplay(buttonPlayA,"n");
        styleDisplay(buttonOtherL,"n");
        styleDisplay(img,"b");
        styleDisplay(imgfinal,"n");
        stage = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,0,0,5,0,0,1,0,0,5,0,0,1,1,0],[0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0],[0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0],[0,1,0,0,0,0,4,1,2,1,4,0,0,0,0,1,0],[0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0],[0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0],[0,1,1,0,0,5,0,0,1,0,0,5,0,0,1,1,0],[0,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];
        for(y=0; y<11; y++){
            for(x=0; x<17; x++){
                let object = stage[y][x];

                if(object == 6){
                    checkpoints[0] = {x: x, y: y};
                    protagonista.x = checkpoints[0].x;
                    protagonista.y = checkpoints[0].y;
                }
            }
        }
        styleDisplay(container,"b");
        styleDisplay(canvas,"b");
        styleDisplay(img,"n");
        styleDisplay(buttonLevel1,"n");
        styleDisplay(buttonLevel2,"n");

        reset();
    }
    buttonLevel2.onclick = function(){
        styleDisplay(container,"n");
        styleDisplay(buttonPlayA,"n");
        styleDisplay(buttonOtherL,"n");
        styleDisplay(img,"b");
        styleDisplay(imgfinal,"n");

        stage = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5,0],[0,6,0,0,0,0,5,4,0,1,0,0,1,1,1,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,4,0],[0,0,0,0,0,0,5,0,0,5,2,0,1,1,0,0,0],[0,5,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0],[0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,1,5,0,5,0,0,5,4,0,0,0,0,0,0],[0,4,0,0,1,1,1,1,1,1,1,1,1,1,1,3,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]
        for(y=0; y<11; y++){
            for(x=0; x<17; x++){
                let object = stage[y][x];

                if(object == 6){
                    checkpoints[0] = {x: x, y: y};
                    protagonista.x = checkpoints[0].x;
                    protagonista.y = checkpoints[0].y;
                }
            }
        }
        styleDisplay(container,"b");
        styleDisplay(canvas,"b");
        styleDisplay(img,"n");
        styleDisplay(buttonLevel1,"n");
        styleDisplay(buttonLevel2,"n");

        reset();
    }
}

var torch = function(x,y){
    this.x = x;
    this.y = y;

    this.delay = 10;
    this.counter = 0;
    this.frame = 0; // 0-4

    this.changeFrame = function(){
        if(this.frame < 4){
            this.frame++;
        }
        else{
            this.frame = 0;
        }
    }

    this.paint = function(){
        if(this.counter < this.delay){
            this.counter++;
        }
        else{
            this.counter = 0;
            this.changeFrame();
        }

        if(this.frame == 0){
            ctx.drawImage(torchImg1, width*this.x, heigth*this.y, width, heigth);
        }
        else if(this.frame == 1){
            ctx.drawImage(torchImg2, width*this.x, heigth*this.y, width, heigth);
        }
        else if(this.frame == 2){
            ctx.drawImage(torchImg3, width*this.x, heigth*this.y, width, heigth);
        }
        else if(this.frame == 3){
            ctx.drawImage(torchImg4, width*this.x, heigth*this.y, width, heigth);
        }
        else if(this.frame == 4){
            ctx.drawImage(torchImg1, width*this.x, heigth*this.y, width, heigth);
        }
    }
}

var key = function(x,y){
        this.x = x;
        this.y = y;

        this.delay = 3;
        this.counter = 0;
        this.frame = 0; // 0-5

        this.changeFrame = function(){
            if(this.frame < 5){
                this.frame++;
            }
            else{
                this.frame = 0;
            }
        }

        this.paint = function(){
            if(protagonista.key == false){
                if(this.counter < this.delay){
                    this.counter++;
                }
                else{
                    this.counter = 0;
                    this.changeFrame();
                }

                if(this.frame == 0){
                    ctx.drawImage(landKey1, width*this.x, heigth*this.y, width, heigth);
                }
                else if(this.frame == 1){
                    ctx.drawImage(landKey2, width*this.x, heigth*this.y, width, heigth);
                }
                else if(this.frame == 2){
                    ctx.drawImage(landKey3, width*this.x, heigth*this.y, width, heigth);
                }
                else if(this.frame == 3){
                    ctx.drawImage(landKey4, width*this.x, heigth*this.y, width, heigth);
                }
                else if(this.frame == 4){
                    ctx.drawImage(landKey5, width*this.x, heigth*this.y, width, heigth);
                }
                else if(this.frame == 5){
                    ctx.drawImage(landKey6, width*this.x, heigth*this.y, width, heigth);
                }
                else if(this.frame == 6){
                    ctx.drawImage(landKey1, width*this.x, heigth*this.y, width, heigth);
                }
            else{
                
            }
        }
    }
}

var enemy = function(x,y){
    this.x = x;
    this.y = y;
    this.direction = Math.floor(Math.random()*4);

    this.delay = 50;
    this.frame = 0;

    this.paint = function(){
        ctx.drawImage(enemyImg, width*this.x, heigth*this.y, width, heigth);
    }

    this.comprobeColision = function(x,y){
        var colision = false;

        if(stage[y][x]==0){
            colision = true;
        }
        else if(stage[y][x]==2){
            colision = true;
        }
        else if(stage[y][x]==3){
            colision = true;
        }
        else if(stage[y][x]==6){
            colision = true;
        }
        else if(stage[y][x]==4){
            colision = true;
        }

        return (colision);
    }

    this.move = function(){

        protagonista.colisionEnemy(this.x, this.y);

        if(this.counter < this.delay){
            this.counter++;
        }
        else{
            this.counter = 0;

            if(this.direction == 0){ // Up
                if(this.comprobeColision(this.x, this.y -1)==false){
                    this.delay = 50;
                    this.y--;
                }
                else{
                    this.delay = 0;
                    this.direction = Math.floor(Math.random()*4);
                }
            }

            else if(this.direction == 1){ // Down
                if(this.comprobeColision(this.x, this.y+1)==false){
                    this.delay = 50;
                    this.y++;  
                }
                else{
                    this.delay = 0;
                    this.direction = Math.floor(Math.random()*4);
                }
            }

            else if(this.direction == 2){ // Left
                if(this.comprobeColision(this.x-1, this.y)==false){
                    this.delay = 50;
                    this.x--;
                }
                else{
                    this.delay = 0;
                    this.direction = Math.floor(Math.random()*4);
                }
            }

            else if(this.direction == 3){ // Rigth
                if(this.comprobeColision(this.x+1, this.y)==false){
                    this.delay = 50;
                    this.x++;
                }
                else{
                    this.delay = 0;
                    this.direction = Math.floor(Math.random()*4);
                }
            }
        }
    }
}

var jugador = function(x,y){
    this.x = x;
    this.y = y;
    this.key = false;

    this.paint = function(){
        ctx.drawImage(character, width*this.x, heigth*this.y, width, heigth);
    }

    this.colisionEnemy = function(x,y){
        if(this.x == x && this.y == y){
            stage[keys[0].y][keys[0].x] = 2;
            this.lost();
        }
    }

    this.margin = function(x,y){
        var colision = false;

        if(stage[y][x]==0){
            colision = true;
        }
        if(stage[y][x]==4){
            colision = true;
        }
        return (colision);
    }

    this.victory = function(){
        move = false;
        canPause = false;
        stage[keys[0].y][keys[0].x] = 2;
        imgfinal.src = winimg.src;
        buttonPlayA.style = "display:block";
        buttonOtherL.style = "display:block";
        canvas.style = "display:none";
        imgfinal.style = "display:block";
        ON = false;

        buttonPlayA.onclick = function(e){
            buttonPlayA.style = "display:none";
            buttonOtherL.style = "display:none";
            canvas.style = "display:block";
            imgfinal.style = "display:none";
            reset();
        }
        
        buttonOtherL.onclick = function(e){
            showLevels()
        }
    }

    this.lost = function(){
        move = false;
        canPause = false;
        stage[keys[0].y][keys[0].x] = 2;
        imgfinal.src = lostimg.src;
        buttonPlayA.style = "display:block";
        buttonOtherL.style = "display:block";
        canvas.style = "display:none";
        imgfinal.style = "display:block";
        ON = false;

        buttonPlayA.onclick = function(e){
            protagonista.x = checkpoints[0].x;
            protagonista.y = checkpoints[0].y;
            imgfinal.style = "display:none";
            buttonPlayA.style = "display:none";
            buttonOtherL.style = "display:none";
            canvas.style = "display:block";
            reset();
        }
        
        buttonOtherL.onclick = function(e){
            showLevels();
        }
    }

    this.up = function(){
        if(this.margin(this.x,this.y-1)==false){
            this.y--;
            this.logicObject();
        }
    }

    this.down = function(){
        if(this.margin(this.x,this.y+1)==false){
            this.y++;
            this.logicObject();
        }
    }

    this.rigth = function(){
        if(this.margin(this.x+1,this.y)==false){
            this.x++;
            this.logicObject();
        }
    }

    this.left = function(){
        if(this.margin(this.x-1,this.y)==false){
            this.x--;
            this.logicObject();
        }
    }

    this.logicObject = function(){
        var object = stage[this.y][this.x];

        if(object == 2){
            this.key = true;
            for(k=0; k<keys.length; k++){
                let colision = (keys[k].x == protagonista.x);

                if(colision){
                    stage[keys[k].y][keys[k].x] = 1;
                }
            }
        }

        if(object == 3 && this.key == true){
            this.victory();
        }
    }
}

function init(){
    ON = false;
    protagonista = new jugador(1,1);

    // Buttons
    buttonPlay = document.getElementById("buttonPlay");
    buttonOtherL = document.getElementById("buttonOtherL");
    buttonPlayA = document.getElementById("buttonPlayA");
    buttonLevel1 = document.getElementById("buttonLevel1");
    buttonLevel2 = document.getElementById("buttonLevel2");
    buttonKeep = document.getElementById("buttonKeep");

    // Canvas 
    canvas = document.getElementById("canvas");

    // Images
    img = document.getElementById("img");
    imgfinal = document.getElementById("imgfinal");
    imglevels = new Image();imglevels.src = 'img/levels.png';
    imgPrincipal = document.getElementById("imgPrincipal");

    // Html
    container = document.getElementById("container");
    levelCanvas = document.getElementById("levels");

    pauseimg = new Image();pauseimg.src = 'img/pauseimg.png';

    torchImg1 = new Image();torchImg1.src = 'img/animate/torch/1.png';
    torchImg2 = new Image();torchImg2.src = 'img/animate/torch/2.png';
    torchImg3 = new Image();torchImg3.src = 'img/animate/torch/3.png';
    torchImg4 = new Image();torchImg4.src = 'img/animate/torch/4.png';
    landKey1 = new Image();landKey1.src = 'img/animate/money/1.png';
    landKey2 = new Image();landKey2.src = 'img/animate/money/2.png';
    landKey3 = new Image();landKey3.src = 'img/animate/money/3.png';
    landKey4 = new Image();landKey4.src = 'img/animate/money/4.png';
    landKey5 = new Image();landKey5.src = 'img/animate/money/5.png';
    landKey6 = new Image();landKey6.src = 'img/animate/money/6.png';
    lostimg = new Image();lostimg.src = 'img/lostimg.png';
    winimg = new Image();winimg.src = 'img/winimg.png';
    checkpoint = new Image();checkpoint.src = 'img/checkpoint.png';
    enemyImg = new Image();enemyImg.src = 'img/animate/zombie/zombie.png';
    stone = new Image();stone.src = 'img/stone.png';
    land = new Image();land.src = 'img/land.png';
    door = new Image();door.src = 'img/door.png';
    character = new Image();character.src = 'img/animate/character/character.png';
    canvas.style = "display: none";
    buttonPlay.style = "display: block";
    ctx = canvas.getContext('2d');
    ctx.drawImage(imgPrincipal, 800,500, width, heigth);
    document.addEventListener('keydown',function(tecla){
        if(move){
            if(tecla.keyCode == 87 || tecla.keyCode == 38){
                protagonista.up();
            }
            else if(tecla.keyCode == 83 || tecla.keyCode == 40){
                protagonista.down();
            }
            else if(tecla.keyCode == 68 || tecla.keyCode == 39){
                protagonista.rigth();
            }
            else if(tecla.keyCode == 65 || tecla.keyCode == 37){
                protagonista.left();
            }
            else if(tecla.keyCode == 82){
                reset();
            }
            else if(tecla.keyCode == 82){
                reset();
            }
        }
        if(canPause){
            if(tecla.keyCode == 80){
                if(pause == false){
                    pause = true;
                }
                else{
                    pause = false;
                }

                if(pause){
                    move = false;
                    styleDisplay(container,"n");
                    styleDisplay(buttonPlayA,"n");
                    styleDisplay(buttonOtherL,"n");
                    styleDisplay(img,"b");
                    styleDisplay(imgfinal,"n");
                    ON = false;
                    imgfinal.src = '';

                    img.src = pauseimg.src;

                    styleDisplay(buttonOtherL,"b");
                    styleDisplay(buttonKeep,"b");

                    buttonOtherL.onclick = function(e){
                        img.src = "";
                        styleDisplay(img,"n");
                        styleDisplay(buttonOtherL,"n");
                        styleDisplay(buttonKeep,"n");
                        showLevels();
                        pause = false;
                    }
                    buttonKeep.onclick = function(e){              
                        styleDisplay(buttonOtherL,"n");
                        styleDisplay(buttonKeep,"n");
                        styleDisplay(img,"n");
                        styleDisplay(imgfinal,"n");
                        styleDisplay(container,"b");
                        img.src = "";
                        move = true;
                        ON = true;
                        canPause = true;

                        pause = false;
                    }
                }
                else{
                    styleDisplay(buttonOtherL,"n");
                    styleDisplay(buttonKeep,"n");
                    styleDisplay(img,"n");
                    styleDisplay(imgfinal,"n");
                    styleDisplay(container,"b");
                    img.src = "";
                    move = true
                    ON = true;

                    pause = false;
                }
            }
        }
    });

    // Button-Onclick
    buttonPlay.onclick = function(e){
        styleDisplay(canvas,"b");
        styleDisplay(imgPrincipal,"n");
        styleDisplay(buttonPlay,"n");
        showLevels();
        interval();
    }
}

function principal(){
    clearCanvaContext();
    paintStage();
    protagonista.paint();

    for(c=0; c<enemies.length; c++){
        enemies[c].paint();
        enemies[c].move();
    }
    
    for(k=0; k<keys.length; k++){
        keys[k].paint();
    }

    for(t=0; t<torchs.length; t++){
        torchs[t].paint();
    }
}

function paintStage(){
    for(y=0; y<11; y++){
        for(x=0; x<17; x++){
            var object = stage[y][x];
            if(object == 0){
                // Stone
                ctx.drawImage(stone,width*x,heigth*y, width, heigth);
            }
            else if(object == 1){
                // Land
                ctx.drawImage(land,width*x,heigth*y, width, heigth);
            }
            else if(object == 2){
                // Money
                // Init
            }
            else if(object == 3){
                // Door
                ctx.drawImage(door,width*x,heigth*y, width, heigth);
            }
            else if(object == 4){
                // Torch
            }
            else if(object == 5){
                ctx.drawImage(land,width*x,heigth*y, width, heigth);
                // Zombie
                // Init
            }
            else if(object == 6){
                ctx.drawImage(checkpoint,width*x,heigth*y, width, heigth);
                // Checkpoint
                // Init
            }
        }
    }
}

function reset(){
    canPause = true;
    move = true;
    ON = true;
    enemies = [];
    keys = [];
    torchs = [];
    protagonista.key = false;
    protagonista.x = checkpoints[0].x; protagonista.y = checkpoints[0].y;

    for(y=0; y<11; y++){
        for(x=0; x<17; x++){
            var object = stage[y][x];
            if(object == 2){
                keys.push(new key(x,y));
            }
            else if(object == 5){
                enemies.push(new enemy(x,y));
            }
            else if(object == 4){
                torchs.push(new torch(x,y));
            }
        }
    }
}

function clearCanvaContext(){
    canvas.heigth = 550;
    canvas.width = 850;
}

function interval(){
    setInterval(function(){
        {
        if(ON){
            principal();
        }
    }},1000/fps);
}   


