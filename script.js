/* ------------------------
Weather World Example

This example will search Open Weather for a user submitted entry
And then populate those results on the page using the jQuery 'append' function

OpenWeather API - http://openweathermap.org/api
------------------------- */


//Define the url for the weather API call
var weatherBaseURL = 'http://api.openweathermap.org/data/2.5/weather?q=';
var weatherQueryParams = '&units=imperial';

//Create a function that will execute the Weather AJAX call
var searchWeather = function(city){

	//Clear the '#weatherResults' div
	//$('#weatherResults').html('');

	var searchURL = weatherBaseURL + city + weatherQueryParams;
	$.ajax({
		url: searchURL,
		type: 'GET',
		dataType: 'json',
		error: function(data){
			console.log("We got problems");
			console.log(data.status);
		},
		success: function(data){
			console.log("WooHoo!");
			//Check the browser console to see the returned data
			console.log(data);

			var theCity = data.name || '????';
			var theTemp = Math.round(data.main.temp);

			var bgClass;
			if (theTemp > 90){
				bgClass = 'redBg';
			}
			else if (theTemp < 90 && theTemp > 80){
				bgClass = 'yellowBg';
			}
			else if (theTemp < 80 && theTemp > 70){
				bgClass = 'greenBg';
			}
			else if (theTemp < 70 && theTemp > 60){
				bgClass = 'blueBg';
			}
			else{
				bgClass = 'grayBg';
			}

			var htmlString =	'<div class="setBorder ' + bgClass + '">' +
													'<div class="weatherCity">' + theCity + '</div>' +
													'<div class="weatherData">' + theTemp + '</div>' +
												'</div>';
			$('#weatherResults').prepend(htmlString);

		}
	});
};

//Code to be executed once the page has fully loaded
$(document).ready(function(){
	console.log("LOADED!!!!");

	//Use jQuery to assign a callback function when the 'search' button is clicked
	$("#search").on('click', function(){
		console.log("Clicked search");
		//Use jQuery to get the value of the 'query' input box
		var newSearchTerm = $("#query").val();
		console.log(newSearchTerm);
		//Execute the Weather API call with the 'newSearchTerm' string as its argument 
		searchWeather(newSearchTerm);
		//$theInputBox.val('Enter another city');
	});


	//Some convenience event handlers to improve the user exeperience
	var $theInputBox = $('#query');

	$theInputBox.on('focus', function(){
		if ($(this).val() === 'Enter a city'){
			$(this).val('');
		}
	});
	$theInputBox.on('focusout', function(){
		if ($(this).val() === ''){
			$(this).val('Enter a city');
		}
	});

	//What if someone just wants to click "ENTER"???
	//Use jQuery to assign a callback function when enter is pressed 
	//This will ONLY work when the '#query' input box is active
	$theInputBox.on('keypress', function(e){
		//If enter key is pressed
		if (e.which == 13){
			//Use jQuery's trigger() function to execute the click event
			$("#search").trigger('click');
		}
	});
});