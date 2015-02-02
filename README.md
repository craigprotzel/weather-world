WEATHER WORLD TUTORIAL
----------------------


### Before We Start
You are going to need a 'code-friendly' Text Editor. We will use this Text Editor to create and write the files we need for our application. If you don't have a Text Editor, there are many to choose from. Here are some free ones that will work for this exercise:
* [Sublime Text](http://www.sublimetext.com/3)
* Text Wrangler (Mac Only)
* [TextMate](http://macromates.com/) (Mac Only)
* Notepad++


### Ingredients
To make this application, we're going to need to understand a few main concepts:
  * JSON - the data
  * API - where and how we get the data
  * HTML - the data represented on the page
  * CSS - the style or look of the data
  * Javacsript - the programming language needed to make this happen


### Section 1: The Plan
Idea - Let's make a super simple weather appplication that runs on the web. You type in the name of a city and get the current temperature for that city. 

Before we start to build anything, what do we need?  Well, we're definitely going to need a way to find out what the temperature is in a city. We can use the [Open Weather API](http://openweathermap.org/api). What's the Open Weather API? Well, the Open Weather API is a service that lets us use the world wide web to 'ask for' (also known as a 'Request') and 'receive' (also known as a Response) up-to-the-minute weather information. Ok, great. That's exactly what we need. So, how do we use it? Let's head over to the [Open Weather Map](http://openweathermap.org) website and look around.  

### Section 2: The API
We are on the Open Weather API

API - stands for Application Programming Interface, which is a way for one application to speak to another

APIs exist all over. 
Some analogies - A Menu, Essa Bagel

For this lesson, we'll think of APIs as "public web urls that return data". What does that mean? Well, while most urls we're accustomed to visiting, like http://google.com, show us a web site designed for a person to use, there are other urls that just show raw data on the page. Why? Because, the browser will display whatever file response comes from the server. Usually, that's an HTML file, but for Web APIs it's something else, usually json or xml.

OpenWeather is a site that will offer us the data with context - the home page, and the raw data - no context.

Let's look at the 'raw data'.

This is json - Javascript Object Notation

Now, this might look terrible. If you're using the Chrome Browser, install a JSON Formatter plugin...

Let's take a look now, much better

K, so now we know where to look for JSON data, but how does that help us. Well, using current web technoloiges, we can use these urls to get the data into our own application

Let's try!

###Section 3: Setup
Our Goal - build an application consisting of an .html file, a .css file, and a .js file that will run in a browser

We're going to need a text editor to write our application. Better than a text editor, what we really want is an IDE, an Integrated Development Environment. This is a text editor that has some extra bells and whistles that will make our development lives much easier. I use Sublime Text...

Once you have an IDE, open it up and let's create some files. Why? Because our application is just a bunch of files.

First is the .html file - html is the info or content that goes on the page, it stands for Hyper Text Markup Language. This page will designate everything we have and need for our application to run in a browser, including other files.
Next, the .css file - this is where we designate the style or look of the content. CSS stand for Cascading Style Sheets, which basically means if there are styles of "equal importance", the last one on the page will be the one that gets applied.
And the .js file - which will handle the behavior of our application, a majority, if not all, of our "interactivity" logic will go here.

Let's review - Our application consists of three main files - (1)an html file, (2)a css file, and (3)a javascript file. We are using an API that will help us obtain data. The data is coming in over the web in a format called JSON. We can use that data in our application. How we actually get the data into our application and onto the page is for the next section. 

###Section 4: HTML
Start by adding some 'markup' to our HTML page

Open the file in the browser, we should see something

###Section 5: CSS
Once we have our initial page, we can add some basic styling via our css file...

###Section 6: Javascript
Now that we have a page, it looks semi-presentable, it's time to add in some interactivity. To do this, we'll need to write some code and we're going to write it in javascript. Why javascript, well, javascript is the language of the Web, it comes installed in the browser and is well-suited to event-based asynchronous interaction...

Let's start by just adding a console.log to our file... 

















