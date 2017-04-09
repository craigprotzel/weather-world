/* ------------------------
Weather World Example

This example will search Open Weather for a user submitted entry
And then populate those results on the page using the jQuery 'append' function

OpenWeather API - http://openweathermap.org/api
Please sign up on OpenWeatherMap to get your own APPID.
------------------------- */

//Define the url for the weather API call
var weatherBaseURL = 'http://api.openweathermap.org/data/2.5/weather?q=';
var weatherQueryParams = '&units=imperial&APPID=9af9987d0f66079a5baa5b00f7f58162';

//Create a function that will generate an HTML string 
//And then add that string to the page
function createHTML(cityName, tempValue){
	var bgClass;
	if (tempValue >= 90){
		bgClass = 'redBg';
	}
	else if (tempValue < 90 && tempValue >= 80){
		bgClass = 'orangeBg';
	}
	else if (tempValue < 80 && tempValue >= 70){
		bgClass = 'yellowBg';
	}
	else if (tempValue < 70 && tempValue >= 60){
		bgClass = 'greenBg';
	}
	else if (tempValue < 60 && tempValue >= 50){
		bgClass = 'blueBg';
	}
	else{
		bgClass = 'grayBg';
	}

	var htmlString =	'<div class="setBorder ' + bgClass + '">' +
											'<div class="weatherCity">' + cityName + '</div>' +
											'<div class="weatherData">' + tempValue + '</div>' +
										'</div>';
	$('#weatherResults').prepend(htmlString);
}

//Create a function that will execute the Weather AJAX call
var searchWeather = function(city){

	var searchURL = weatherBaseURL + city + weatherQueryParams;
	$.ajax({
		url: searchURL,
		type: 'GET',
		dataType: 'json',
		error: function(data){
			console.log("We got problems");
			console.log(data.status);
			alert("Oh no. Something went wrong...");
		},
		success: function(data){
			console.log("WooHoo!");
			//Check the browser console to see the returned data
			console.log(data);
			//Check to make sure the success response is ok
			if (data.cod === '404'){
				alert("Oh no. Something went wrong. Try another city");
				//adding a return will end the success function
				return;
			}

			$("#query").val('');

			var theCity = data.name || '????';
			var theTemp = Math.round(data.main.temp) || 70;

			//Call a function that will create an HTML string & add it to the page
			createHTML(theCity, theTemp);
		}
	});
};

//Code to be executed once the page has fully loaded
$(document).ready(function(){
	console.log("LOADED!!!!");

	//Use jQuery to assign a (callback) function to occur when the 'search' button is clicked
	$("#search").on('click', function(){
		console.log("Clicked search");
		//Use jQuery to get the value of the 'query' input box
		var newSearchTerm = $("#query").val();
		console.log(newSearchTerm);
		//Execute the Weather API call with the 'newSearchTerm' string as its argument 
		searchWeather(newSearchTerm);
		$("#search").blur();
	});

	//What if someone just wants to click "ENTER"???
	//Use jQuery to assign a (callback) function to occur when enter is pressed 
	//This will ONLY work when the '#query' input box is active
	$('#query').on('keypress', function(e){
		//If enter key is pressed
		if (e.which == 13){
			//Use jQuery's trigger() function to execute a click event on the '#search' element
			$("#search").trigger('click');
		}
	});
});
