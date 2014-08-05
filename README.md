

Idea - Let's make a super simple weather appplication. 

You type in the name of a city, you get the current temperature

But, before we start to build anything, what do we need? 

Well, first, we're going to need a way to find out what the temperature is in a city.

We can use the Open Weather API

What's the Open Weather API? Better question, what's an API?

API - stands for Application Programming Interface, which is a way for one application to speak to another

APIs exist all over. 
Some analogies - a menu, Essa Bagel

For this lesson, we'll think of APIs as public web urls that return data.
What does that mean?
Well, while most urls we're accustomed to visiting, like http://google.com, show us web sites designed for a person to use, there are other urls that will just show us some raw data. 

Let's head over to the OpenWweatherMap web site and see what I'm talking about
http://openweathermap.org/api...

Get some data on the page.

This is json - Javascript Object Notation

Now, this might look terrible. If you're using the Chrome Browser, install a JSON Formatter plugin
Let's take a look now, much better

K, so now we know where to look for JSON data, but how does that help us. Well, using current web technoloiges, we can use these urls to get the data in our own application

Let's try.

Goal - build an application consisting of an .html file, a .css file, and a .js file that will run in a browser

We're going to need a text editor to write our application. Better than a text editor, what we really want is an IDE, an Integrated DEvelopment Environment. This is a text editor that has some extra bells and whistles that will make our development lives much easier. I use Sublime...

Once you have an IDE, open it up and let's create a some files. Because our application is just a bunch of files
First is the .html file - html is the info or content that goes on the page, it stands for Hyper Text Markup Language
The .css file - the style or look of the content, stands for Cascading Style Sheets
And the .js file - which will handle the behavior of our application, a majority of the interactivity will go here.

Let's review - we have an API that will help us get data. The data is coming in over the web in a form called JSON. We can use that data in our application. Our application consists of three main files, an html file, a css file, and a js file


Start by adding some 'markup' to our HTML page

Open the file in the browser, we should see something

Once we have our initial page, we can add some basic styling via our css file

...

Now that we have a page, it looks semi-presentable, it's time to add in some interactivity. To do this, we'll need to write some code and we're going to write it in javascript. Why javascript, well, javascript is the language of the Web, it comes installed in the browser and is well-suited to event-based asynchronous interaction...

Let's start by just adding a console.log to our file 

















