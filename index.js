function Challenge(){
var randomNumber1=Math.floor(Math.random()*6)+1;
var string1="dice"+randomNumber1+".png";
document.querySelector("img.img1").setAttribute("src","images/"+string1);
var randomNumber2=Math.floor(Math.random()*6)+1;
var string2="dice"+randomNumber2+".png";
document.querySelector("img.img2").setAttribute("src","images/"+string2);
if(randomNumber1===randomNumber2){
  document.querySelector("h1").innerHTML="Draw!";
}
else if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="🚩<br>Player 1 Wins!";
}
else{
  document.querySelector("h1").innerHTML="Player 2 Wins!<br>🚩";
}
}
