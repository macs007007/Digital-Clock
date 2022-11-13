// Create a digital seconds clock using set interval and date object in javascript the date object can be used to get dates the date time hour and seconds which can then be updated using set Interval and try to make a good UI.

// solution
let clock = ()=>{
 let h = document.getElementById("hours");
 let m = document.getElementById("minutes");
 let s = document.getElementById("seconds");
 let period = document.getElementById("period");

 let hours = new Date().getHours();
 let minutes = new Date().getMinutes();
 let seconds = new Date().getSeconds();

 let ampm = h >= 12 ? "AM":"PM"

 if(hours>12){
  hours = hours - 12;
 }
hours = (hours<10)?"0"+hours:hours;
minutes = (minutes<10)?"0"+minutes:minutes;
seconds = (seconds<10)?"0"+seconds:seconds;

h.innerHTML=hours; 
m.innerHTML=minutes; 
s.innerHTML=seconds; 
period.innerHTML=ampm; 
};
clock();
setInterval(clock,1000)
