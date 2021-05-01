const weather = document.querySelector(".js_weather");
const API_KEY = '510557c748f233f6dc58d93cba81d755';
const CORDOS = 'coords';

function getWeather(lat, lng){
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`).then(function (response){
    return(response.json());
  }).then(function(json){
    const temperature = json.main.temp;
    const location = json.name;
    weather.innerText = `${temperature} ºC & ${location}`;
  }); 
}

function saveCords(cordsObj){
  localStorage.setItem(CORDOS, JSON.stringify(cordsObj));
}

function handleGeoSucces(position){
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const cordsObj = {
    latitude,
    longitude
  };
  saveCords(cordsObj);
  getWeather(latitude, longitude);
}//좌표를 가져오는데 성공했을 때를 처리하는 함수

function handleGeoError(){
  console.log("We can't access geo location")
}

function askForCords(){
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCords(){
  const loadedCords = localStorage.getItem(CORDOS);
  if (loadedCords === null){
    askForCords();
  } else {
    const parseCoords = JSON.parse(loadedCords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
}   

function init(){
  loadCords();
}

init();
