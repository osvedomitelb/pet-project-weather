let userInput = document.querySelector("#city-input");
let submitBtn = document.querySelector("#submitBtn");
let cityOutput = document.querySelector ("#city");
let imageOutput = document.querySelector ("#image");
let tempOutput = document.querySelector ("#weather-temp");
let condOutput = document.querySelector ("#weather-condition");
let futureDatesOutput = document.querySelector("#weather-output-future-dates");
const form = document.querySelector("#city-form");
const error = console.log("You have entered a wrong city name");

let apiKey = "99445c83b1307cae76fa5bb49ad13ce9";
let urlLink = `https://api.openweathermap.org/data/2.5/forecast?q={cityName}&appid=${apiKey}`;



//--------------------------FUNCTION TO CONVERT KELVINS TO CELSIUS----------------------------//
function conversion(value) {
    return Math.round(value - 273.15);
}


//--------------------------FUNCTION TO WORK WITH A BUTTON----------------------------//
// submitBtn.addEventListener ('click', function () {
//     if (userInput.value > 0) {
//         fetch('https://api.openweathermap.org/data/2.5/weather?q=' + userInput.value + '&appid=' + {apiKey})
//             .then(response => response.json())
//             // .then(data => console.log(data))
//             .then (data => {
//                 console.log(data)
//                 let cityValue = data.city.name;
//                 let countryValue = data.city.country;
//                 let imageValue = '<img src="https://openweathermap.org/img/wn/' + data.list[0].weather[0]['icon'] + '@2x.png">';
//                 let temperature = data.list[0].main.temp;
//                 let condValue = data.list[0].weather[0]['description'];
//
//                 cityOutput.innerHTML = cityValue + ", " +countryValue;
//                 imageOutput.innerHTML = imageValue;
//                 tempOutput.innerHTML = "Temperature is:" + conversion(temperature) + " C";
//                 condOutput.innerHTML = condValue;
//
//             })
//             .catch(error);
//     }
// });


//--------------------------FUNCTION TO WORK WITH A FORM----------------------------//

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const city = userInput.value;
    if (city.length > 0) {

        const url = urlLink.replace("{cityName}", encodeURIComponent(city))

        fetch(url)
            .then(response => response.json())
            .then (data => {
                // console.log(data);
                let cityValue = data.city.name;
                let countryValue = data.city.country;
                let imageValue = '<img src="https://openweathermap.org/img/wn/' + data.list[0].weather[0]['icon'] + '@2x.png">';
                let temperature = data.list[0].main.temp;
                let condValue = data.list[0].weather[0]['description'];

                cityOutput.innerHTML = cityValue + ", " +countryValue;
                imageOutput.innerHTML = imageValue;
                tempOutput.innerHTML = "Temperature is: " + conversion(temperature) + " &#176";
                condOutput.innerHTML = condValue;

            })
            .catch(error);
    }
})

//--------------------------DATA THAT WILL BE GENERATED AFTER THE PAGE IS LOADED----------------------------//

window.addEventListener('load', (event) => {
    const url = urlLink.replace ("{cityName}", "Wroclaw");
    fetch(url)
        .then(response => response.json())
        .then (data => {
            // console.log(data);
            let cityValue = data.city.name;
            let countryValue = data.city.country;
            let imageValue = '<img src="https://openweathermap.org/img/wn/' + data.list[0].weather[0]['icon'] + '@2x.png">';
            let temperature = data.list[0].main.temp;
            let condValue = data.list[0].weather[0]['description'];

            cityOutput.innerHTML = cityValue + ", " +countryValue;
            imageOutput.innerHTML = imageValue;
            tempOutput.innerHTML = "Temperature is: " + conversion(temperature) + "&#176";
            condOutput.innerHTML = condValue;

        })
        .catch(error);
})