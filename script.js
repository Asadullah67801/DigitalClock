/*

const minNum=50;
const maxNum=100;
const answer=Math.floor(Math.random()*(maxNum-minNum+1));
*/
// o

let display=document.getElementById("Myclockdisplay").addEventListener("click",function()
{

   
    var date=new  Date();




    var h=date.getHours();
    var m=date.getMinutes();
    var s=date.getSeconds();
    var session="Am";
    if(h==0){
        h=12;

    }
    if(h>12){
        h=h-12;
        session="PM";
    }
    h=(h<10) ? "0" + h:h;
    m=(m<10) ? "0" + m : m;
    s=(s<10) ? "0"+ s :s;
    var time=h + ":" + m + ":" +s+ " "+session;


    setTimeout(showTime,1000);
});














