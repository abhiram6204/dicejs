var random1=Math.round(Math.random()*6+1);
var random2=Math.round(Math.random()*6+1);
if (random1==1){
    document.querySelector(".img1").setAttribute("src","./images/dice1.png");
}
else if (random1==2){
    document.querySelector(".img1").setAttribute("src","./images/dice2.png");
}
else if (random1==3){
    document.querySelector(".img1").setAttribute("src","./images/dice3.png");
}
else if (random1==4){
    document.querySelector(".img1").setAttribute("src","./images/dice4.png");
}
else if (random1==5){
    document.querySelector(".img1").setAttribute("src","./images/dice5.png");
}
else if (random1==6){
    document.querySelector(".img1").setAttribute("src","./images/dice6.png");
}
if (random2==1){
    document.querySelector(".img2").setAttribute("src","./images/dice1.png");
}
else if (random2==2){
    document.querySelector(".img2").setAttribute("src","./images/dice2.png");
}
else if (random2==3){
    document.querySelector(".img2").setAttribute("src","./images/dice3.png");
}
else if (random2==4){
    document.querySelector(".img2").setAttribute("src","./images/dice4.png");
}
else if (random2==5){
    document.querySelector(".img2").setAttribute("src","./images/dice5.png");
}
else if (random2==6){
    document.querySelector(".img2").setAttribute("src","./images/dice6.png");
}
var heading=document.lastElementChild.lastElementChild.firstElementChild.firstElementChild;
if(random1>random2)
{
    heading.innerHTML="Player1 wins";
}
else if(random1<random2)
{
    heading.innerHTML="Player 2 Wins";
}
else
{
    heading.innerHTML="Draw";
}