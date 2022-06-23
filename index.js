window.onload = () => {

    let totalFrameCount = 0;
    let foodArray =[];
    let foodChoiceArray =['donut', 'broccoli', 'coffee'];
    let score = 0;
    let gameId;
    let donutCount = 0;

    document.getElementById('start-button').onclick = () => {
      startGame();
    };

    //Score
    const scoreEl = document.querySelector('#scoreEl')
    

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
        seconds += 1;
        
        if (finalCountdown) {
            clearInterval(countdownTimer);
            clearInterval(gameId);
            alert('You ran out of time! Game over!!!')
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
    let spoon;
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
        this.height = height;
    }

    updatePosition (){
        this.x += this.vX
        this.y += this.vY
    }

    crashWith (target){
        if (this.x < target.x + target.width &&
            this.x + this.width > target.x &&
            this.y < target.y + target.height &&
            this.height + this.y > target.y) {
         return true;
        } else {
           return false;
        }
    }
}

class ImageObject extends RectangleObject {
    constructor(x, y, width, height, imageElement){
       super(x, y, width, height);
       this.image = imageElement;
       this.sx = 0;
       this.sy = 0;
       this.swidth = width;
       this.sheight = height;
    }
    draw(){
        ctx.drawImage(this.image, this.sx, this.sy, this.swidth, this.sheight, this.x, this.y, this.width, this.height);
    }
}
   
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
       myBaby.swidth = 891;
       myBaby.sy = 2112;
       myBaby.sheight = 2112;

       gameId = setInterval(updateGame, 16.76)
    });

    //sounds
    

    //TIMER
    countdownTimer = setInterval(GameTimer, 1000);


        function updateGame(){

            totalFrameCount++;
            //60 frames/seconds 
            if(totalFrameCount % 60 ===0){
                console.log ('1s havs passed')
                let randomFoodNumber = Math.floor (Math.random() * foodChoiceArray.length)
                let randomFoodImg = foodChoiceArray[randomFoodNumber];

                let foodX = undefined;
                let foodY = undefined;

                if (Math.random() > 0.5){
                    foodX = Math.floor(Math.random() * (canvas.width * 0.17))
                    foodY = Math.floor(Math.random() * canvas.height * 0.9)      
                }
                else{
                    foodX = Math.floor(Math.random() * canvas.width * 0.075 + (canvas.width * 0.81))
                    foodY = Math.floor(Math.random() * canvas.height * 0.9)  
                }
                let newFood = new ImageObject(foodX, foodY, 30, 30, loadedImageObjects[randomFoodImg])
                newFood.swidth = 16;
                newFood.sheight = 16;
                if(Math.random() > 0.5){
                    newFood.vY = Math.random() * 3
                } else {
                    newFood.vY = Math.random() * -3
                }
                foodArray.push(newFood)
            }
            // babyPosition.updatePosition();
            myBaby.updatePosition();
            for (let i =0; i< foodArray.length; i++){
                foodArray[i].updatePosition()
            };
            if(spoon != undefined){
                spoon.updatePosition();
            }
           
            //drawings
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(loadedImageObjects.restaurant, 0, 0, canvas.width, canvas.height);
            for (let i =0; i< foodArray.length; i++){
                foodArray[i].draw()
            };
        
            myBaby.draw();

            if (spoon != undefined){
                spoon.draw()
            }
            for (let i =0; i< foodArray.length; i++){
                if(spoon != undefined){
                    if (spoon.crashWith(foodArray[i])){
                        let crashFoodArray = foodArray.splice(i, 1)
                        spoon = undefined
                        // console.log(crashFood, crashFood.image)
                    switch(crashFoodArray[0].image.src){
                        case loadedImageObjects.broccoli.src:
                            score += 100
                            break
                        case loadedImageObjects.coffee.src:
                            clearInterval (gameId)
                            clearInterval (countdownTimer)
                            alert('You drank coffee! Game over!!!')
                            break
                        case loadedImageObjects.donut.src:
                            if(donutCount === 2){
                                clearInterval (gameId)
                                clearInterval (countdownTimer)
                                alert('You ate 3 donuts! Game over!!!')
                            }
                            else{
                                score += 200
                                donutCount++
                            }               
                            break
                    }                              
                        scoreEl.innerHTML = score               
                    }                   
                }            
            };
        }
            document.addEventListener('keydown', (event)=>{
                switch(event.code){
                    case 'ArrowLeft':
                        myBaby.vX -=1;
                        myBaby.sy = 0;
                        break;
                    case 'ArrowRight':
                        myBaby.vX +=1;
                        myBaby.sy = 2112;
                        break;
                    case 'ArrowUp':
                        event.preventDefault();
                        myBaby.vY -=1;
                        break;
                    case 'ArrowDown':
                        event.preventDefault();
                        myBaby.vY +=1;
                        break;   
                    case 'Space':
                        event.preventDefault();
                        spoon = new ImageObject(myBaby.x, myBaby.y, 32, 32, loadedImageObjects.spoon)
                        if (myBaby.sy === 2112){
                            spoon.sx = 0;
                            spoon.sy = 16;
                            spoon.swidth = 16;
                            spoon.sheight = 16;
                            spoon.vX = 4;
                        }
                        else{
                        spoon.sx = 0;
                        spoon.sy = 0;
                        spoon.swidth = 16;
                        spoon.sheight = 16;
                        spoon.vX = -4;
                        }
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