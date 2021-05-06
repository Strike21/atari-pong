var brg={}
var lde=false
window.onload=function(){
  lde=true
var ctx=document.getElementById('a').getContext('2d')
var speed=1
var ball={x:30,y:ctx.canvas.height / 2,deg:0,rev:0}
var bar={x:10,y:(ctx.canvas.height / 2) - 25}
var ai={}
var res={you:0,ai:0}
var starpong=true
document.getElementById('ctn').oninput=function(e){
  if(starpong){
    bar.y=bar.y - -(document.getElementById('ctn').value)
  }
  document.getElementById('ctn').value=0
}
document.getElementById('a').onmousemove=function(e){
  if(starpong){
  //ctx.clearRect(0,0,10000,5000)
  ctx.fillStyle='#FFFFFF'
  var posy=e.clientY / (250 / ctx.canvas.height)
  ctx.fillRect(10,posy - 25,10,50)
  bar.x=10
  bar.y=posy - 25
}
}
setInterval(function(){
  if(starpong){
    ctx.font='20px bold'
  ctx.clearRect(0,0,10000,5000)
  ctx.fillStyle='white'
  for(var i=0;i < ctx.canvas.height / 20;i++){
  ctx.fillRect((ctx.canvas.width / 2) - 2.5,i*20,5,10)
  }
  ctx.fillRect(ball.x - -5,ball.y - 5,5,5)
  ctx.fillRect(bar.x,bar.y,10,50)
  if(ball.rev == 1){
  ball.x--
  }else{
  ball.x++
  }
   ctx.fillRect(ctx.canvas.width - 20,ball.y - 25,10,50)
   ai.x=ctx.canvas.width - 20
   ai.y=ball.y - 25
   ball.y=parseInt(ball.y - -(ball.deg / 10))
   if(ball.x >= ai.x - 10){
     if(Math.abs(Math.abs(ball.y) - Math.abs(ai.y)) <= 50){
     ball.rev=1
     speed=Math.floor(Math.random()*101)
     var rnd=Math.random()
     if(Math.floor(Math.random()*2) == 1){
     ball.deg=rnd - rnd*2
     }else{
       ball.deg=rnd
     }
     //0,1,2,3,4,5
     }
   }else if(ball.x <= bar.x){
     if(Math.abs(Math.abs(ball.y) - Math.abs(bar.y)) <= 50){
     ball.rev=0
     var rnd=Math.random()
     speed=Math.floor(Math.random()*101)
     if(Math.floor(Math.random()*2) == 1){
       ball.deg=rnd - rnd*2
     }else{
       ball.deg=rnd - rnd*2
     }
     }
   }
   if(ball.y <= 0){
   ball.deg=ball.deg - -1
   }
   if(ball.y >= ctx.canvas.height){
     ball.deg=ball.deg - 1
   }
   /*ctx.fillText(res.you,30,30,100)
   ctx.fillText(res.ai,ctx.canvas.width - 30,30,100)*/
   ctx.textAlign='center'
   if(ball.x <= 0){
     res.ai++
     ctx.fillText(res.you,30,30,100)
     ctx.fillText(res.ai,ctx.canvas.width - 30,30,100)
     starpong=false
     setTimeout(function(){
       starpong=true
       ball={x:30,y:ctx.canvas.height / 2,deg:0,rev:0}
     },3000)
   }
   if(ball.x >= ctx.canvas.width){
     res.you++
    ctx.fillText(res.you,30,30,100)
    ctx.fillText(res.ai,ctx.canvas.width - 30,30,100)
    starpong=false
    setTimeout(function(){
      starpong=true
      ball={x:30,y:ctx.canvas.height / 2,deg:0,rev:0}
    },3000)
   }
  }
},1)
/*window.onerror=(e)=>{
  document.write(e)
}*/
}
function snd(e){
  var vle=e.value
  e.value=0
  if(starpong){
  if(vle == -1){
    bar.y++
  }
}
}
