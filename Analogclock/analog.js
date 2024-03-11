function anlogClock(){
    const hrs=document.querySelector(".hours")
    const mins=document.querySelector(".minutes")
    const secs=document.querySelector(".seconds")
    var getCurrentDate=new Date()
    // console.log(getCurrentDate)
    var getsec= getCurrentDate.getSeconds()/60
    var getmins=(getsec + getCurrentDate.getMinutes())/60
    var gethrs= (getmins + getCurrentDate.getHours())/12
    hrs.style.setProperty('--rotation',gethrs*360);
    mins.style.setProperty('--rotation',getmins*360);
    secs.style.setProperty('--rotation',getsec*360);
    // console.log(gethrs,getmins,getsec)
}
anlogClock();
setTimeout(()=>{setInterval(anlogClock,1000)},1000)
