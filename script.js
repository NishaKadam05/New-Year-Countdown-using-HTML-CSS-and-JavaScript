const days=document.querySelector(".days");
const hr=document.querySelector(".hours");
const min=document.querySelector(".minutes");
const sec=document.querySelector(".seconds");

const currentyear=new Date().getFullYear();
const newyearTime=new Date(`January 01 ${currentyear+1} 00:00:00`);

function countDown(){
    let currentDate=new Date();
    let timeDiff=newyearTime-currentDate;
    let d=Math.floor(timeDiff/1000/60/60/24);
    let h=Math.floor(timeDiff/1000/60/60)%24;
    let m=Math.floor(timeDiff/1000/60)%60;
    let s=Math.floor(timeDiff/1000)%60;

    if(h<10)
    {
        h='0'+h;
    }
    if(m<10)
    {
        m='0'+m;
    }
    if(s<10)
    {
        s='0'+s;
    }
    days.innerHTML=d;
    hr.innerHTML=h;
    min.innerHTML=m;
    sec.innerHTML=s;
}
countDown();
setInterval(countDown,1000);
