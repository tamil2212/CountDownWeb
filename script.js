const days=document.querySelector("#days")
const hours=document.querySelector("#hours")
const minutes=document.querySelector("#minutes")
const seconds=document.querySelector("#seconds")

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}


function updateDateTime(){

const startbtn=document.getElementById('startbutton')
  const endDate = document.getElementById('countdownDate')
  if(endDate.value==null || endDate.value==""){
    return
  }

  console.log("end date: ",endDate.value);
  const getYear=new Date().getFullYear()
  const getNewYear=getYear
  const NewDateyear = endDate.value
  const currentDate=new Date()
  const diff=new Date(endDate.value)-currentDate
  const day=Math.floor(diff/1000/60/60/24)
  const hour=Math.floor((diff/1000/60/60)%24)
  const minute=Math.floor((diff/1000/60)%60)
  const second=Math.floor((diff/1000)%60)
  console.log(day,hour,minute,second);
  days.innerHTML=day<10?"0"+day:day+ " :"
  hours.innerHTML=(hour<10?"0"+hour:hour)+" :"
  minutes.innerHTML=(minute<10?"0"+minute:minute )+ " :"
  seconds.innerHTML=second<10?"0"+second:second
  console.log(day+""+hour+""+minute+""+second )
  startbtn.ariaDisabled=true

if(day==0 && minute==0 && hour==0 && second==0){
  var countStatus=document.getElementById('timerStatus')
  countStatus.innerHTML="Count down Completed"
  startbtn.ariaDisabled=false

  setTimeout(function(){
    countStatus.innerHTML=""
  },3000)
}
else{
  sleep(500).then(() => {
    updateDateTime()
  });
}
}

// setInterval(updateDateTime,1000);


// setTimeout(()=>{
//     document.body.style.background = 'red'; // make the background red
//     setTimeout(() => document.body.style.background = '', 3000);
//    },1000);

