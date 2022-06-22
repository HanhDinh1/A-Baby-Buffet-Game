window.onload = () => {

    let totalFrameCount = 0;
    let foodArray =[];
    let foodChoiceArray =['donut', 'broccoli', 'coffee'];

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
    let loadedImageObjects =null;
    let myBaby;
    let donut;
    let coffee;
    let broccoli;

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

//test
// function drawAilse(){
//     ctx.clearRect((canvas.width) * 0.18, 0, (canvas.width)*0.64, canvas.height)
// }
//end test
   
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
        // requestAnimationFrame(loadImages);
    }
    var sources = {
        baby: "./images/baby.png",
        restaurant: "./images/restaurant.png",
        donut: "./images/donut.png",
        broccoli: "./images/broccoli.png",
        coffee: "./images/coffee.png",
        spoon: "./images/spoon.png"
    };
    
    loadImages(sources, function(images){
       loadedImageObjects = images;
       myBaby = new ImageObject(canvas.width/2, canvas.height -190, 80, 175, images.baby);
       //donut = new ImageObject(0, 0, 30, 30, images.donut)
       //coffee = new ImageObject(0, 30, 30, 30, images.coffee)
       //broccoli = new ImageObject(0, 60, 30, 30, images.broccoli)
       //spoon
       setInterval(updateGame, 16.76)
    });

    //sounds
    

    //TIMER
    //countdownTimer = setInterval(GameTimer, 1000);


        function updateGame(){

            totalFrameCount++;
            //60 frames/seconds 
            if(totalFrameCount %240 ===0){
                console.log ('4s havs passed')
                let randomFoodNumber = Math.floor (Math.random() * foodChoiceArray.length)
                let randomFoodImg = foodChoiceArray[randomFoodNumber];

                let foodX = undefined;
                let foodY = undefined;

                if (Math.random() > 0.5){
                    foodX = Math.floor(Math.random() * (canvas.width * 0.18))
                    foodY = Math.floor(Math.random() * canvas.height)      
                }
                else{
                    foodX = Math.floor(Math.random() * canvas.width * 0.18 + (canvas.width * 0.82))
                    foodY = Math.floor(Math.random() * canvas.height)  
                }

                foodArray.push(new ImageObject (foodX, foodY, 30, 30, loadedImageObjects[randomFoodImg]))
            }
            // babyPosition.updatePosition();
            myBaby.updatePosition();

            //drawings
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(loadedImageObjects.restaurant, 0, 0, canvas.width, canvas.height);
            for (let i =0; i< foodArray.length; i++){
                foodArray[i].draw()
            };
        
            myBaby.draw();
           
        }

    

        

//PROJECTILE
// class Projectile{
//     constructor(x, y, radius, color, velocity){
//         this.x = x
//         this.y = y
//         this.radius = radius
//         this.color = color
//         this.velocity = velocity
//     } 
//     draw() {
//         ctx.beginPath()
//         ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
//         ctx.fillStyle = this.color
//         ctx.fill()
//             }
//     }


// addEventListener('click', (event)=>{
// // console.log('go')
// const Projectile = new projectile(
//     event.foodX,
//     event.foodY,


// )
// })
//END PROJECTILE
    

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