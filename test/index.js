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
//     update(){
//         this.draw()
//         this.x = this.x + this.velocity.x
//         this.y = this.y + this.velocity.y
//     }
//     }

//     let babyPosition =  myBaby.updatePosition();
//     const baby = new Baby (x, y, )

// //projectile array
//     const projectile = new Projectile(
//         // event.clientX,
//         // event.clientY,
//         canvas.width/2,
//         canvas.height/2,
//         5, 
//         'pink',
//         {
//             x = 1,
//             y = 1
//         }
//     )
//     const projectiles = [projectile]

//     function animate(){
//         requestAnimationFrame(animate)
//         projectiles.forEach ((projectile) =>{
//             projectile.update()
//         })

//         // projectile.draw()
//         // projectile.update()
//     }

// addEventListener('click', (event)=>{
// // console.log(event)
//const angle = Math.atan2(event.clientY - canvas.height/2, 
//event.clientX - canvas.width/2)
// projectiles.push(new Projectile(
//     canvas.width/2, canvas.height/2, 5, 'pink', {x:1, y: 1}
// ))
// })
// animate()
//END PROJECTILE