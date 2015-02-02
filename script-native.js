//Define a function to call when the button is clicked
function getWeatherInfo(){
	console.log("Getting weather information!");
	var theInputBox = document.getElementById('query');
	var theInputValue = theInputBox.value;
	console.log(theInputValue);

	var weatherURL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&q=';
	var searchURL = weatherURL + theInputValue;

	$.getJSON(searchURL,
			function(data){
				console.log(data);
				var theTemperature = "???";
				if (data.cod === '404'){
					alert("Oh no. Try again.");
					return;
				}
				console.log(data.main.temp);
				theTemperature = data.main.temp;
				var theResult = document.getElementById('weatherResults');
				theResult.innerHTML = "The temperature in " + theInputValue + " is " + theTemperature;
			}
	);
}

//Get the button
var theButton = document.getElementById('search');
//Add a listener to the button
theButton.addEventListener('click', getWeatherInfo);

