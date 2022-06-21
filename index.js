

window.onload = () => {

    // //create a starting frame count of zero
    // let totalFrameCount = 0;
  
    // //create a default empty obstacle array (we will add obstacles later)
    // let obstacleArray = [];
  
    // //create a default intervalId of null (we will set it with a non-null value later)
    // let intervalId = null;
  
    //when the start button is clicked, invoke the startGame function to start our game
    document.getElementById('start-button').onclick = () => {
      startGame();
    };

function startGame(){
    const canvas = document.querySelector ('canvas')
    const ctx = canvas.getContext('2d')
    
    // canvas.width = innerWidth
    // canvas.height = innerHeight

    const restaurantImg = new Image();
        restaurantImg.src = './images/restaurant.png';
    // const myRestaurant = new ImageObject(0, 0, canvas.width, canvas.height, ctx, restaurantImg);

    const babyImg = new Image();
        babyImg.src = './images/baby.png';

    restaurantImg.onload = () =>{
        babyImg.onload = () => {
            ctx.drawImage(restaurantImg, 0, 0, canvas.width, canvas.height)
            ctx.drawImage(babyImg, 120, 300, 240,355)

            document.addEventListener('keypress', (event)=>{
                switch(event.code){
                    case 'ArrowLeft':

                        break;
                    case 'ArrowRight':

                        break;
                }
            })
        }
    }
       
    // const ElizabethImg = new Image();
    // ElizabethImg.src = './images/Elizabeth.png';
    // const myElizabeth = new ImageObject(canvas.width/2, canvas.height -150, 50, 100, ctx, ElizabethImg);

// class ImageObject {
//     constructor(x, y, width, height, imageElement){
//         this.image = imageElement;
//         this.x = x;
//         this.y = y;
//         this.width = width;
//         this.height = height;
//         this.ctx = canvasContext;

//     }
// }

}
// document.addEventListener("keypress", funtion(event){
//     makeSound(event.key);
// })

// function makeSound (key){
// switch(key){
//     case "start-button";
//     let start = new Audio("sounds/start.mp3");
//     start.play();
//     break;
// }
// }

// }



// lass ImageObject extends MovingObjects {
//     constructor(x, y, width, height, imageElement) {
//         super(x,y, width, height);
//         this.image = imageElement;
//     }
//     draw() {
//         ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
//     }
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