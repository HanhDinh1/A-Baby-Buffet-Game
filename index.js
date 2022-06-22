window.onload = () => {

    let totalFrameCount = 0;

    document.getElementById('start-button').onclick = () => {
      startGame();
    };

    //start timer
    var isWaiting = false;
    var isRunning = false;
    var seconds = 60;
    var countdownTimer;
    var finalCountdown = false;

function GameTimer() {
    var minutes = Math.round(Math.floor(seconds/60));
    var remainingSeconds = seconds % 60;
    if (remainingSeconds < 10) {
        remainingSeconds = "0" + remainingSeconds;
    }
    document.getElementById('waiting_time').innerHTML = minutes + ":" + remainingSeconds;
    if (seconds == 0) {
        isRunning = true;
        seconds += 2;
        
        if (finalCountdown) {
            clearInterval(countdownTimer);
        } else {
            finalCountdown = true;
        }

    } else {
        isWaiting = true;
        seconds--;
    }
}
    //end timer

    
function startGame(){
    const canvas = document.querySelector ('canvas')
    const ctx = canvas.getContext('2d')
    //Music
    var backgroundMusic = new Audio('./sounds/carefree.m4a');
    backgroundMusic.loop = true;
    backgroundMusic.volume = 0.4;
    backgroundMusic.play();

    //sounds


    //TIMER
    countdownTimer = setInterval(GameTimer, 1000);

    const restaurantImg = new Image();
        restaurantImg.src = './images/restaurant.png';
    // const myRestaurant = new ImageObject(0, 0, canvas.width, canvas.height, ctx, restaurantImg);

    const babyImg = new Image();
        babyImg.src = './images/baby.png';

    class RectangleObject {
            constructor(x, y, width, height){
            this.x = x;
            this.y =y;
            this.vX =0;
            this.vY = 0;
            this.width = width;
            this.height=height;
        }

        updatePosition (){
            this.x += this.vX
            this.y += this.vY
        }

        // draw(){
        //     ctx.fillRect(this.x, this.y, this.width, this.height);
        // }
    }

    class ImageObject extends RectangleObject {
        constructor(x, y, width, height, imageElement){
           super(x, y, width, height);
           this.image = imageElement;
        }
        draw(){
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        }
    }

    const myBaby = new ImageObject(canvas.width/2, canvas.height -190, 80, 175, babyImg);

        function updateGame(){

            totalFrameCount ++;

            //60 frames/seconds => 240/3seconds
            if(totalFrameCount %240 ===0){
                // console.log ('4s havs passed')
            }
            // babyPosition.updatePosition();
            myBaby.updatePosition();


            //drawings
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(restaurantImg, 0, 0, canvas.width, canvas.height);
            
           myBaby.draw();
        }

    restaurantImg.onload = () =>{
            
            setInterval(updateGame, 16.76)
    };
//food
function loadImages (sources, callback){
    var images = {};
    var loadedImages = 0;
    var numImages = 0;

    for (var src in sources){
        numImages++;
    }
    for(var src in sources) {
        images[src] = new Image();
        images[src].onload = function(){
            if(++loadedImages >= numImages){
                callback(images);
            }
        };
        images[src].src = sources[src];
    }
}
var sources = {
    donut: "./images/donut.png",
    broccoli: "./images/broccoli.png",
    coffee: "./images/coffee.png"
};
loadImages(sources, function(images){
    ctx.drawImage(images.donut, 0, 0);
    ctx.drawImage(images.broccoli, 200, 300);
    ctx.drawImage(images.coffee, 400, 300);
});

//END FOOD

    

            document.addEventListener('keydown', (event)=>{
                switch(event.code){
                    case 'ArrowLeft':
                        myBaby.vX -=1;
                        break;
                    case 'ArrowRight':
                        myBaby.vX +=1;
                        break;
                    case 'ArrowUp':
                        myBaby.vY -=1;
                        break;
                    case 'ArrowDown':
                        myBaby.vY +=1;
                        break;   
                }
            })

            document.addEventListener('keyup', (event)=>{
                switch(event.code){
                    case 'ArrowLeft':
                        myBaby.vX =0;
                        break;
                    case 'ArrowRight':
                        myBaby.vX =0;
                        break;
                    case 'ArrowUp':
                        myBaby.vY =0;
                        break;
                    case 'ArrowDown':
                        myBaby.vY =0;
                        break;
                }
            })
}


}




// class Player{
//     constructor(x, y, radius, color) {
//         this.x = x
//         this.y = y
//         this.radius = radius
//         this.color = color
//     }

//     draw() {
//         ctx.beginPath()
//         ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
//         ctx.fillStyle = this.color
//         ctx.fill()
//     }
// }

// const x = 250   
// const y = 300

// const player = new Player (x, y, 30, 'black')
// player.draw()

// console.log(player)