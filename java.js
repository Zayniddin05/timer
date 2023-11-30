const Hours = document.getElementById("hours")
const Minuts = document.getElementById("minuts")
const Seconds = document.getElementById("seconds")

setInterval(()=>{
    let newDate = new Date()
    Hours.innerHTML = newDate.getHours() < 10 ? "0"+newDate.getHours() : newDate.getHours();
    Minuts.innerHTML = newDate.getMinutes()  < 10 ? "0"+newDate.getMinutes() : newDate.getMinutes(); 
    Seconds.innerHTML = newDate.getSeconds()  < 10 ? "0"+newDate.getSeconds() : newDate.getSeconds();
},1000) 