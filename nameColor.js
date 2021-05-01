const nameColor = document.querySelector("#title");
//document.title = 'Hi! Nice to meet you';

const BASE_COLOR = "rgb(255, 118, 117)";//pinkColor
const OTHER_COLOR = "#ffeaa7";//lightpurpleColor

function handleClick() {  
  console.log("Hi, nice to meet you");
  const currentColor = nameColor.style.color;
  if (currentColor === BASE_COLOR){
    nameColor.style.color = OTHER_COLOR;
  } else {
    nameColor.style.color = BASE_COLOR;
  }
}

function init(){
  nameColor.style.color = BASE_COLOR;
  nameColor.addEventListener("mouseenter", handleClick);
}

init();
