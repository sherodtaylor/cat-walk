var img = document.getElementsByTagName("img")[0]
var timer;
var position = 0

function catWalkForwards(){ 
  if (img.style.paddingLeft >= (document.width - img.width) + "px"){
    return;
  }
  img.style.paddingLeft = function(){ 
  	 position += 5;
     return position +"px";
  }();
 };

function catWalkBackwards(){ 
  var padding = parseInt(img.style.paddingLeft);
  img.style.paddingLeft = function(){ 
  	 padding -= 5;
     return padding +"px";
  }();
 };
function startForward(){
  clearInterval(timer)
  timer = setInterval(catWalkForwards, 30)
};

function moveFasterF(){
  clearInterval(timer)
  timer = setInterval(catWalkForwards, 10)
};

function moveSlowerF(){
  clearInterval(timer)
  timer = setInterval(catWalkForwards, 100)
};

function stop(){
  clearInterval(timer)
};

function startBackwards(){
  clearInterval(timer)
  timer = setInterval(catWalkBackwards, 30)
};

