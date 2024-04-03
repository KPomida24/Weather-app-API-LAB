const apiKey = "448db85215c96b69df99e93cc9ef1522";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?&units=metric&q="

const forecastIcon = document.querySelector(".forecast-Icon");

async function checkWeather(city){
    const inputValue = document.getElementById("input").value;

  try {
    const apiUrl =`https://api.openweathermap.org/data/2.5/weather?&units=metric&q=${inputValue}&appid=${apiKey}`
    
    const response = await fetch(apiUrl);
    var data = await response.json();
    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    const weatherType = data.weather[0].main.toLowerCase();

    if(weatherType == "clouds"){
      forecastIcon.src = "Assets/clouds.png";
    }
    else if(weatherType == "clear"){
      forecastIcon.src = "Assets/clear.png";
    }
    else if(weatherType == "drizzle"){
      forecastIcon.src = "Assets/drizzle.png";
    }
    else if(weatherType == "mist"){
      forecastIcon.src = "Assets/mist.png";
    }
    else if(weatherType == "rain"){
      forecastIcon.src = "Assets/rain.png";
    }
    else if(weatherType == "snow"){
      forecastIcon.src = "Assets/snow.png";
    }
 

  } catch (error) {
    alert("City Unknown");
  }

}

const search = document.getElementById('search');
search.addEventListener("click", checkWeather);

// {
//   "coord": {
//       "lon": 72.8479,
//       "lat": 19.0144
//   },
//   "weather": [
//       {
//           "id": 721,
//           "main": "Haze",
//           "description": "haze",
//           "icon": "50d"
//       }
//   ],
//   "base": "stations",
//   "main": {
//       "temp": 28.99,
//       "feels_like": 31.17,
//       "temp_min": 28.94,
//       "temp_max": 28.99,
//       "pressure": 1011,
//       "humidity": 61
//   },
//   "visibility": 2500,
//   "wind": {
//       "speed": 2.57,
//       "deg": 130
//   },
//   "clouds": {
//       "all": 43
//   },
//   "dt": 1712116800,
//   "sys": {
//       "type": 1,
//       "id": 9052,
//       "country": "IN",
//       "sunrise": 1712106040,
//       "sunset": 1712150560
//   },
//   "timezone": 19800,
//   "id": 1275339,
//   "name": "Mumbai",
//   "cod": 200
// }