
function digitalclock(){
    const clock=document.querySelector("#timer")
    var currentTime=new Date()
    var hour=currentTime.getHours()
    var minute=currentTime.getMinutes()
    var second=currentTime.getSeconds()
    clock.innerHTML=`${hour<10?"0"+hour:hour} : ${minute<10?"0"+minute:minute} : ${second<10?"0"+second:second}`
    console.log(hour)
    
}

digitalclock()
setTimeout(()=>{
setInterval(digitalclock,1000)
},1000)

