// const zipSubmit = document.querySelector('#zipSubmit');
const zipCode = document.querySelector('#zip');
const zipForm = document.querySelector('#zipForm');
// const zipCode = zipForm.elements['zip'];
// const citySubmit = document.querySelector('#citySubmit');
const city = document.querySelector('#city');
const cityForm = document.querySelector('#cityForm');
// const city = cityForm.elements['city'];

// const getWeather = function () {
// console.log(form.elements)
// const zipEntry = zipCode.value
// const cityEntry = city.value
// const q = zipEntry ? zipEntry : cityEntry;
// console.log(q);
// }

// 1) one of these functions is called by the form submission event listener
const getWeatherByZip = (e) => {
  // e.preventDefault();
  const q = zipCode.value;
  getWeather(q);
}
const getWeatherByCity = (e) => {
  e.preventDefault();
  const q = city.value;
  getWeather(q);
}

// 2) the function will call the getWeather function, and pass through q, to use as the query in the API call

const getWeather = async (q) => {
  try {
    const response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=5ace8684d4ea4a17890104119221105&q=${q}&days=3&aqi=no&alerts=no`);
    const weatherData = response.data;
    console.log(weatherData);
    displayData(weatherData);
    // return weatherData;
  }
  catch (e) {
    console.log(e);
  }
}

// 3) the getWeather function will call the displayData function and pass through the data

const displayData = (data) => {
  const currentWeatherList = document.querySelector('#currentWeather');
  // const newLI = document.createElement('li');
  // newLI.innerText = data.location.name;
  const locationLI = document.createElement('li');
  locationLI.innerText = `${data.location.name}, ${data.location.region}`;
  currentWeatherList.append(locationLI);

  const conditionLI = document.createElement('li');
  conditionLI.innerText = data.current.condition.text;
  currentWeatherList.append(conditionLI);

  const tempLI = document.createElement('li');
  tempLI.innerText = `${data.current.temp_f} F`;
  currentWeatherList.append(tempLI);

  // const image = document.createElement('img')
  // const imageLI = document.createElement('li');
  // console.log(data.current.condition.icon.slice(2));
}



zipForm.addEventListener('submit', getWeatherByZip)
cityForm.addEventListener('submit', getWeatherByCity)

// zipSubmit.addEventListener('click', function (e) {
//   // console.dir(zipCode)
//   e.preventDefault();
//   console.dir(zipCode)
// });
