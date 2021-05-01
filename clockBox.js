const clockBox = document.querySelector(".js_clock"), 
  clockTitle = clockBox.querySelector("h1");
const date = document.querySelector(".js_date"),
  dateTitle = date.querySelector("h3");

function timeBox(){
  const time = new Date();
  const hours = time.getHours();
  const minutes = time.getMinutes();  
  //const seconds = time.getSeconds();
  const year = time.getFullYear();
  const month = time.getMonth() + 1;
  const day = time.getDate();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
  dateTitle.innerText = `${year} . ${month < 10 ? `0${month}` : month} . ${day < 10 ? `0${day}` : day}`;
}
  
function init(){
  timeBox();
  setInterval(timeBox, 1000);
}
init();
