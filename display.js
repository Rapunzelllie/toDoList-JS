const form = document.querySelector(".js_form"),
  input = form.querySelector("input"),
  naming = document.querySelector(".js_namings");

const USER_LS = "nowUsing",
  SHOWING_CN = "showing";

function saveName(text){
  localStorage.setItem(USER_LS, text);
}  

function handleSubmit(event){
  event.preventDefault();
  const currentValue = input.value;
  paintNaming(currentValue);
  saveName(currentValue);
}

function askForName(){
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintNaming(text){
  form.classList.remove(SHOWING_CN);
  naming.classList.add(SHOWING_CN);
  const timeText = changeName();
  naming.innerText = `${timeText}, ${text}`;
}

function changeName(){
  const date = new Date();
  const hours = date.getHours();
  if(5 <= hours && hours < 12){
    return "Good Morning";
  } else if(12 <= hours && hours < 17){
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
} 

function conName(){
  const currentUser = localStorage.getItem("nowUsing")
  if(currentUser === null){
    askForName(); 
  } else {
  paintNaming(currentUser);
  }
}

function init(){
  conName();
}

init();
