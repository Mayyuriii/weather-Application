var inputval = document.querySelector('#cityinput');
var btn = document.querySelector('#add');
var cityoutput = document.querySelector('#cityoutput');
var description = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
var apik = "83210c2c935645273c9e360f5c74565d";

function convertion(val) {
    return (val - 273).toFixed(2);
}

btn.addEventListener('click', function() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + inputval.value + '&appid=' + apik)
        .then(res => res.json())
        .then(data => {
            var nameval = data['name'];
            var descripVal = data['weather'][0]['description'];
            var temperature = data['main']['temp'];
            var wndspd = data['wind']['speed'];
            cityoutput.innerHTML = `weather of <span>${nameval}</span>`;
            temp.innerHTML = `temperature : <span>${convertion(temperature)}C</span>`;
            description.innerHTML = `sky condition: <span>${descripVal}</span>`;
            wind.innerHTML = `wind speed: <span>${wndspd} km/h</span>`;
        })
        .catch(err => alert('You Entered Wrong City Name'));
});
