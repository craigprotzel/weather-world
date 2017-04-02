WEATHER WORLD
-------------

Click [HERE](http://craigprotzel.github.io/weather-world) to view a working demo.

A basic client-side weather app example.  
Uses the [Open Weather Map API](http://openweathermap.org/api) to request weather data.

## WORKSHOP

IDEA - Let's make a super simple weather appplication that runs on the web. You type in the name of a city and get the current temperature for that city. 

### Before We Start
You are going to need a 'code-friendly' Text Editor. We will use this Text Editor to create and write the files we need for our application. If you don't have a Text Editor, there are many to choose from. Here are some free ones that will work for this exercise:
* [Sublime Text](http://www.sublimetext.com/2)
* [Brackets](http://brackets.io)
* [Text Wrangler](http://www.barebones.com/products/textwrangler/download.html) (Mac Only)
* [TextMate](http://macromates.com/) (Mac Only)
* [Notepad++](https://notepad-plus-plus.org/download/v6.9.1.html)

### Ingredients
To make this application, we're going to need to cover the following topics:
  * HTML - the information represented on the page
  * CSS - the style or look of the information
  * Javacsript - the programming language needed to add the necessary behavior (or interaction) to the webpage
  * API (Application Programming Interface) - where and how we get the weather data
  * JSON - the weather data
  * jQuery - a javascript library that makes web programming a bit easier for us

### Section 1: The Setup
Our Goal - build an application consisting of an .html file, a .css file, and a .js file that will run in a browser.

We're going to need a text editor to write our application. Better than a text editor, what we really want is an IDE, an Integrated Development Environment. This is a text editor that has some extra bells and whistles that will make our development lives much easier. I use Sublime Text, but it's up to you which one you'd like to use. I've listed a few options above.

Once you have an IDE, open it up and let's create some files. Why? Because our application is just a bunch of files.

First we'll make a .html file - HTML is the "info" or content that goes on the page. It stands for Hyper Text Markup Language. This page will designate everything we have and need for our application to run in a browser, including other files.
Next, the .css file - This is where we designate the style or look of the content. CSS stands for Cascading Style Sheets, which basically means if there are styles of "equal importance", the last one to be defined will be the one that gets applied.
And the .js file - This will handle the "behavior" of our application. A majority, if not all, of our "interactivity" logic will go here.

Let's review - Our application consists of three main files - (1)an HTML file, (2)a CSS file, and (3)a javascript file. We haven't gotten to this yet, but we are going to use a web API that will help us obtain data. The data will come in via the web in a format called JSON. We can use that data in our application. How we actually get the data into our application and onto the page is for a later section. For now, let's start to build our web page.

### Section 2: HTML
Start by adding some 'markup' to our HTML page. 

Once you have the appropriate markup, open the file in the browser. You can open the file in the browser by double-clicking the file or control-clicking the file and select "Open With" and your browser of choice. I'll be using Google Chrome. Once it opens, you should see the "content" of your markup rendered on a web page.


### Section 3: CSS
Now that our initial page is complete, we can add some basic styling to make it look better. We do this in our .css file.

After adding some CSS markup, refresh the browser page and you should see the styles added to the presentation of the content.

We can explore the Developer Tools in the browser to help with our styling.

### Section 4: Javascript
Now that we have a page that looks semi-presentable, it's time to add in the necessary interactivity. To do this, we'll need to write some code and we're going to write it in javascript. Why javascript, well, javascript is the language of the Web, it comes installed in the browser, and it's well-suited to event-based asynchronous interactions.

Let's start by just adding a ``console.log("Hello");`` to our file.

Look in the Developer Tools "Console" and you should see a Hello.

We can also write javascript code directly in the "Console".

Let's play with some variables - containers for data, in the console.

The browser also creates some variables for us, one of which is the document. The document variable has all the markup information from the .html file, which is great. Why? Because now we can use this variable to select an element on the page and associate the appropriate interactivity with that element.

In terms of "interactivity", we want to be able to "get" the user input "when" our button is pressed. Let's get make this happen by creating an "Event Listener". We will listen for anytime the button is pressed. When it is pressed, we'll get whatever information is inside the input box.

Great, we have that all working but now what? We're kind of stuck. We need a way to find out what the temperature is in a city. Fortunately, we can use a free and open weather api service to do this!

### Section 5: The API
The [Open Weather API](http://openweathermap.org/api) is a service that lets us use the world wide web to 'ask for' or 'get' (also known as a 'Request') and 'receive' (also known as a 'Response') up-to-the-minute weather information. Ok, great. That's exactly what we need. So, how do we use it? Let's head over to the [Open Weather Map](http://openweathermap.org) website and look around.  

We are on the Open Weather API

API - stands for Application Programming Interface, which is a way for one application to speak to another

APIs exist all over.

Some analogies - A Menu, Essa Bagel

For this lesson, we'll think of APIs as "public web urls that return data". What does that mean? Well, with most urls  we visiting, like http://google.com, we expect the browser to show us a web site designed for a person to use. But, there are other urls that just show raw data on the page. Why? Because, the browser will display whatever file response comes from the server. Usually, that's an HTML file, but for Web APIs it's something else, usually json or xml.

OpenWeather is a site that will offer us a home page data where the data has context and a raw json page where the data has no context.

Let's look at the 'raw data'.

This is json - Javascript Object Notation

Now, this might look terrible. If you're using the Chrome Browser, install a JSON Formatter plugin. You can install one from the [Chrome Web Extensions](https://chrome.google.com/webstore/category/extensions).

Let's reload the raw json data page...much better

OK, so now we know where to look for JSON data, but how does that help us. Well, using current web technoloiges, we can use these urls to get the data into our own application

Let's try!

### Section 6: The Data 
Back in our javascript file, let's define a function called getWeatherData(). A function is an encaspsulated piece of code that can be executed at any time. Inisde the function, we can write all of the code we need to request the appropriate data and add it to the page.
