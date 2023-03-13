
//selector variable
var inputval = document.querySelector('#cityinput')
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')


// added api key from weather app
apik = "e330d3f7aa41e07c45587b9bb9b3323d"
//kelvin to celcious
function convertion(val){
    return (val - 273).toFixed(2)
}
//fetch api key and request from api
    btn.addEventListener('click', function(){
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+apik)
        .then(res => res.json())
         //.then(data => console.log(data))
        .then(data => {
            var nameval = data['name']
            var descrip = data['weather']['0']['description']
            var Temperature = data['main']['temp']
            var wndspd = data['wind']['speed']

            city.innerHTML=`City: ${nameval}`
            temp.innerHTML = `Temperature: ${ convertion(Temperature)} C`
            description.innerHTML = `Conditions: ${descrip}`
            const wndspdMph = (wndspd * 0.621371).toFixed(1);
            wind.innerHTML = `Wind Speed: ${wndspdMph} mph`; // added km to miles conversion

        })

        
        .catch(err => alert('You entered Wrong city name')) // returning error
    })

