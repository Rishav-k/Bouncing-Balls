console.log("Hello !! I am JavaScript");

var c = document.querySelector("canvas");
c.width = window.innerWidth;
c.height = window.innerHeight;

var x = Math.floor(Math.random()*innerWidth);
var y = Math.floor(Math.random()*innerHeight);
var vx = Math.floor(Math.random()*20);
var vy = Math.floor(Math.random()*10);
var radius = 40;

var ctx = c.getContext("2d");


// // // // Circle Movement

// var x = 300;
// var y = 200;
// var vx = 200 ;
// var vy = 200;
// var flag = false;
// circle();
// function circle(){
//      var myReq = requestAnimationFrame(circle);
//     //  ctx.clearRect(0,0nb ,innerWidth , innerHeight);

//     //  Creating Circle
//      ctx.beginPath();
//      ctx.fillStyle = "black";
//      ctx.fillStyle = "rgba(0,255,255,0.6)";
//      ctx.strokeStyle = "black";

//      ctx.arc( vx , vy , 10 , 0 , 2*Math.PI);
//      ctx.stroke();
//      ctx.fill();
     
//      if(flag === false){
//         vx += 1 ;
//         vy = y - Math.sqrt(radius*radius - (x-vx)*(x-vx));
//      }
//      if(flag === true){
//         vx -= 1 ;
//         vy = Math.sqrt(radius*radius - (x-vx)*(x-vx)) + y ;
//         if(vx === x - radius){
//             console.log("End " + vx);
//             console.log(x - radius + " ok fine");
//             cancelAnimationFrame(myReq);
//         }
//      }
     
//     if(vx === x + radius){
//         console.log("Hello " + vx);
//         flag = true;
//     }
// }




// Bouncing Against Wall 


bounce();
function bounce(){
     requestAnimationFrame(bounce);
     ctx.clearRect(0,0,innerWidth , innerHeight);

    //  Creating Circle
    
    //  ctx.strokeStyle = "black";
    // for(var i = 0 ; i < 10 ; i++){
        //  x = Math.floor(Math.random()*innerWidth);
        //  y = Math.floor(Math.random()*innerHeight);
        ctx.beginPath();
        
        ctx.arc( x , y , radius , 0 , 2*Math.PI);
        
    //  ctx.stroke();
     ctx.fill();

    //  radius +=0.5;
     
    if(x + radius > innerWidth){
        ctx.fillStyle = "rgba(200,255,255,0.6)";
        vx = 0 - vx ;
    } 
    if(x - radius < 0){
        ctx.fillStyle = "rgba(150,25,255,0.6)";
        vx = 0 - vx ;
    }
    if(y + radius > innerHeight){
        ctx.fillStyle = "rgba(50,255,25,0.6)";
        vy = 0 - vy;
    }
    if(y -  radius < 0){
        ctx.fillStyle = "rgba(100,255,55,0.6)";
        vy = 0 - vy;
    }
 
    x = x + vx ;
    y = y + vy ;
    // }
     

}

