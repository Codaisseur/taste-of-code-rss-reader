## Outline the Project

Today we will be building a RSS feed reader, using HTML, CSS and jQuery.

Before we start, it's always helpful to first outline what you want your project to do/achieve.

* Display a list of some of your favorites news sites, along with its square logo
* Display links to the last 5 articles for each site
* Open these articles in a different window when clicked on

[![](https://raw.githubusercontent.com/Codaisseur/taste-of-code-rss-reader/master/screenshots/07-fine-tuning-01.png)](https://raw.githubusercontent.com/Codaisseur/taste-of-code-rss-reader/master/screenshots/07-fine-tuning-01.png)





## HTML

HTML is the language of the web, used for writing web pages. Any website you ever visited was made with html. The language started off as a pure text based document format. Each new version of HTML, it is adapted to the new requirements of the web.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Taste of Code</title>
  </head>

  <body>
    <h1>Agenda</h1>
    <p>On the menu today:</p>

    <ul>
      <li>Structure with HTML</li>
      <li>Styling with CSS</li>
      <li>Happiness with Lunch</li>
    </ul>
  </body>
</html>
```

Let's explain this example one _tag_ at a time:

* `DOCTYPE` defines the document type to be HTML
* `<html>` describes an HTML document
* `<head>` provides information about the document
* `<title>` provides a title for the document
* `<body>` describes the visible page content
* `<h1>` describes a heading
* `<p>` describes a paragraph
* `<ul>` describes an unordered list
* `<li>` describes a list item





#### HTML Tags

HTML tags are **keywords** (tag names) surrounded by **angle brackets**:

```html
<tagname>building my first RSS reader</tagname>
```

* HTML tags normally come **in pairs** like `<p>` and `</p>`.
* The first tag in a pair is the **opening tag**, the second tag is the **closing tag**.
* The closing tag is written like the starting tag, but with a **slash** before the tag name.





#### ✎ Exercise: Your Very First HTML

The first step is to begin creating our project. Go ahead and make a new folder -- name it how you wish -- and add a new `index.html` file. We will be writing our first HTML here.

Apply everything you learnt until now and make your browser render a page similar to this one -- feel free to select any of your favorite news sites -- :

[![](https://raw.githubusercontent.com/Codaisseur/taste-of-code-rss-reader/master/screenshots/01-html-01.png)](https://raw.githubusercontent.com/Codaisseur/taste-of-code-rss-reader/master/screenshots/01-html-01.png)





## CSS

CSS is a stylesheet language that describes the presentation of an HTML document, defining how elements must be rendered on screen, on paper, or in other media.

With CSS you can control the color of the text, the style of fonts, the spacing between paragraphs, how columns are sized and laid out, what background images or colors are used, layout designs, variations in display for different devices and screen sizes as well as a variety of other effects.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Taste of Code</title>
    <style>
      h1 {
        color: red;
      }
    </style>
  </head>

  <body>
    <h1>Agenda</h1>
    ...
  </body>
</html>
```

Any style rule is made of three parts:

* **Selector** − Any HTML tag (like `<h1>` or `<table>`) at which a style will be applied.

* **Property** - A type of attribute of HTML tag. They could be color, border etc.

* **Value** - Assigned to properties. For example, `color` property can have a _red_ value.

You could write any CSS Style Rule Syntax like this:

```css
selector { property: value }
```





#### ✎ Exercise: Background color

Change the background-color of the HTML page to green.

[![](https://raw.githubusercontent.com/Codaisseur/taste-of-code-rss-reader/master/screenshots/02-css-01.png)](https://raw.githubusercontent.com/Codaisseur/taste-of-code-rss-reader/master/screenshots/02-css-01.png)





#### CSS Selectors

You can select elements in your HTML by its **tag name** (this is the same example we have seen above):

```css
h1 {
  color: red;
}
```

You can also select elements in your HTML by its **class name**:

```css
.warning {
  color: red;
}
```

Check out a list of CSS properties [here](http://www.w3schools.com/cssref/default.asp).





#### ✎ Exercise: Warning

Apply the warning class to the main heading.

[![](https://raw.githubusercontent.com/Codaisseur/taste-of-code-rss-reader/master/screenshots/02-css-02.png)](https://raw.githubusercontent.com/Codaisseur/taste-of-code-rss-reader/master/screenshots/02-css-02.png)





#### Linking to a CSS file from an HTML page

Use the `<link>` HTML tag to link to any CSS file. Its `href` attribute tells the browser where the CSS file is stored. Note that it is added within the `<head>` tag in your HTML file.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>RSS Personal Reader</title>
    <link rel="stylesheet" type="text/css" href="css/styles.css">
  </head>
  <body>
    <!-- … -->
  </body>
</html>
```





#### ✎ Exercise: Advanced Styling

Go ahead and apply everything you now know about CSS and do some chick styling in your project. Need inspiration when choosing colors? Check the ones in [this collection](http://www.lolcolors.com/).

If you still don't have anything in mind, you could try to do something like this:

[![](https://raw.githubusercontent.com/Codaisseur/taste-of-code-rss-reader/master/screenshots/02-css-03.png)](https://raw.githubusercontent.com/Codaisseur/taste-of-code-rss-reader/master/screenshots/02-css-03.png)

If you want to challenge yourself, add some gradients to the background colors:

[![](https://raw.githubusercontent.com/Codaisseur/taste-of-code-rss-reader/master/screenshots/02-css-04.png)](https://raw.githubusercontent.com/Codaisseur/taste-of-code-rss-reader/master/screenshots/02-css-04.png)





## JavaScript

JavaScript is used in browsers to make websites more interactive, interesting and user-friendly. Using JavaScript you can access and modify the content and markup used in a web page while it is being viewed in the browser. And pages can also respond to what the user does.

You might not know yet, but JavaScript lives already in every browser.

[![](https://raw.githubusercontent.com/Codaisseur/taste-of-code-rss-reader/master/screenshots/03-js-01.png)](https://raw.githubusercontent.com/Codaisseur/taste-of-code-rss-reader/master/screenshots/03-js-01.png)

To open the Console tab in Chrome, do one of the following:

* Use the keyboard shortcut `Command` + `Option` + `J` (Mac) or `Control` + `Shift` + `J` (Windows/Linux).
* Select Chrome Menu > More Tools > JavaScript Console.






#### ✎ Exercise: JavaScript Maths

Open the JavaScript console in your browser and use it to do some calculations, like `10 + 5` or `123456 / 2`.





#### How JavaScript makes web pages more interactive

**1) Access Content:** Select any element, attribute or text from an HTML page. For example, you can select any elements that have a class attribute with a value of `warning`.

**2) Modify Content:** Add elements, attributes and text to the page, or remove them. For example, you can add a paragraph of text after the first `<h1>` element.

**3) Program Rules or Instructions:** Specify a set of steps for the browser to follow (like a recipe), which allows it to access or change the content of a page. For example, you can write a RSS feed script that checks which link a user clicked on and redirect him/her to the article page.

**4) React to Events:** Specify that a script should run when a specific event has occurred. For example, it could be run when a button is pressed or a web page has finished loading.

Before you learn how to read and write JavaScript itself, you need to become familiar with some key concepts in computer programming.





#### Objects (things) & Properties (characteristics)

In computer programming, each thing in the world can be represented as an object. Each object can have its own **properties** and **methods**.

Let's look at an example in the console:

The browser represents each window or tab using a `window` object. The `location` property of the `window` object will tell you the URL of the current page.

```javascript
window.location;
```

We can also use the `window` object to create an alert box with some text by using the `.alert()` method. Methods represent things people need to do with objects.

```javascript
window.alert('Hello');
```

We can use the `document` object to get the `title` of the page. The `title` property of the `document` object tells you what is between the opening `<title>` and closing `</title>` tag for that web page.

```javascript
document.title;
```

Or to print something into the `document` or web page:

```javascript
document.write('Nice to see you!');
```

* The `document` object represents the entire web page. All web browsers implement this object, and you can use it just by giving its name.

* The `write()` method of the `document` object allows new content to be written into the page where the `<script>` element sits.

* Whenever a method requires some information in order to work, the data is given inside the parentheses. Each piece of information is called a `parameter` of the method. In this case, the `write()` method needs to know what to write in to the page.





#### ✎ Exercise: Exploring the Console

Using the JavaScript console on your browser try some of these:

* Open up an alert box in your web page.
* Inspect the title of your web page.
* Modify the content of your web page.





#### What is a Variable?

A script will have to temporarily store the bits of information it needs to do its job. It can store this data in **variables**.

Variables can be thought of as named containers. You can place data into these containers and then refer to the data simply by naming the container.

In the following example you would use a variable to remember the `sum` value:

```javascript
var sum = 10 + 5;
```

You can also use variables to store a **string**:

```javascript
var greeting = "Good morning";
```

Or **boolean** data, which can have one of two values: `true` or `false`.

```javascript
var buildingFeedReaderAtNOS = true;
```





#### ✎ Exercise: Storing feed urls in variables

Visit the site [NEDERLANDSE RSS FEEDS](http://www.nationalemediasite.nl/rss-feeds.php) and select 4 sites that you want to follow. Find out each of the feed URLs for these sites and store each of them in a variable.

This is how an example with NOS feed URL would look like:

```javascript
var nosUrl = "http://feeds.nos.nl/nosjournaal";
```





#### Creating your first script

A script is a series of instructions that a computer can follow step-by-step to achieve a goal. To write a script, you need to:

* first state your goal
* and then list the tasks that need to be completed to achieve it

Start with the big picture of what you want to achieve, and break that down into smaller steps.

This script adds a greeting into an HTML page. The greeting changes depending on the time of the day.

```javascript
// js/greeting.js

var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Good evening!';
} else if (hourNow > 12) {
    greeting = 'Good afternoon!';
} else if (hourNow > 0) {
    greeting = 'Good morning!';
} else {
    greeting = 'Welcome!';
}

document.write('<h3>' + greeting + '</h3>');
```





#### Linking to a JavaScript file from an HTML page

When you want to use a JavaScript with a web page, you use the HTML `<script>` element to tell the browser that is coming across a script. Its `src` attribute tells people where the JavaScript file is stored.

JavaScript runs where it is found in the HTML. When the browser comes across a `<script>` element, it stops to load the script and then checks to see if it needs to do anything.

Note that the location of the `greeting.js` script affects where the new greeting is written into the page.

```html
<!-- index.html -->

<!DOCTYPE html>
<html>
  <head>
    <title>RSS Personal Reader</title>
    <link rel="stylesheet" type="text/css" href="css/styles.css">
  </head>
  <body>
    <script src="js/greeting.js"></script>
    <h1 class="title"> RSS Personal Reader </h1>
    <!-- ... -->
  </body>
</html>
```





#### ✎ Exercise: Greeting with JavaScript

Add any message you wish at the top of your web page depending on the day time.

[![](https://raw.githubusercontent.com/Codaisseur/taste-of-code-rss-reader/master/screenshots/03-js-02.png)](https://raw.githubusercontent.com/Codaisseur/taste-of-code-rss-reader/master/screenshots/03-js-02.png)





#### What is an Object

You have already learned that JavaScript variables are containers for data values, where we can store any data we wish.

Objects group together a set of variables to create a model of something you would recognize from the real world. In an object, variables become known as properties.

Example of an object could be a library where a collection of feed URLs are stored categorized by site.

```javascript
var feedsLibrary = {
  nos: "http://feeds.nos.nl/nosjournaal"
}
```

Every property in an object has a name (programmers call it **key**) and a **value**. In our previous example, `nos` is the key of the property and `http://feeds.nos.nl/nosjournaal` is its value.





#### Access & update text / markup with innerHTML

You can select any element in the HTML by selecting its **class** or **id**.

Let's add an id `nos` to the unordered list and reference a new JavaScript file `rss.js` at the end of the `<body>`:

```html
<!-- index.html -->

<!DOCTYPE html>
<html>
  <head>
    <title>RSS Personal Reader</title>
    <link rel="stylesheet" type="text/css" href="css/styles.css">
  </head>

  <body>
    <script src="js/greeting.js"></script>

    <h1 class="main-title"> RSS Personal Reader </h1>

    <h3 class="site-title">NOS Nieuws</h3>
    <ul id="nos"></ul>

    <script src="js/rss.js"></script>
  </body>
</html>
```

And let's look at how to show the `nosUrl` value within the `nos` unordered list:

```javascript
// rss.js
var nosUrl = "http://feeds.nos.nl/nosjournaal";

var feedsLibrary = {
  nos: nosUrl
};

var ulNos = document.getElementById('nos');
ulNos.innerHTML = '<a href="' + feedsLibrary.nos + '">' + feedsLibrary.nos +'</a>';
```





#### ✎ Exercise: Rendering feed URLs with JavaScript

Go ahead and show each of the feed URLs stored in the `feedLibrary` object under its corresponding unordered list. Your web page should end up looking something like this:

[![](https://raw.githubusercontent.com/Codaisseur/taste-of-code-rss-reader/master/screenshots/03-js-03.png)](https://raw.githubusercontent.com/Codaisseur/taste-of-code-rss-reader/master/screenshots/03-js-03.png)





## jQuery

[jQuery](https://jquery.com/) makes writing JavaScript a lot easier. It offers a simple way to achieve a variety of common JavaScript tasks quickly and consistently, across all major browsers.

#### Find elements using CSS-style selectors

jQuery lets you find elements using CSS-style selectors and then do something with the elements using jQuery methods.

```javascript
// javascript
var ulNos = document.getElementById('nos');
ulNos.innerHTML = '<a href="' + feedsLibrary.nos + '">NOS Feeds</a>';

//jQuery
var ulNos = $('ul#nos');
ulNos.html('<a href="' + feedsLibrary.nos + '">NOS Feeds</a>');
```

#### Do something with the elements using jQuery methods

The jQuery object has many methods that you can use to work with the elements you select. The methods represents tasks that you commonly need to perform with elements.

Example of how to add a class to a HTML element:

```javascript
$('ul#nos').addClass('complete');
```

#### Include jQuery in your page

In order to use jQuery, the first thing you need to do is include the jQuery script in your page. You can see that it is included within the `<head>` element. Once jQuery has been added to the page, you can include any JavaScript file that uses jQuery selectors and methods to update the content of the HTML page.


```html
<!DOCTYPE html>
<html>
  <head>
    <title>RSS Personal Reader</title>
    <link rel="stylesheet" type="text/css" href="css/styles.css">
  </head>
  <body>
    <!-- ... -->
    <script src="http://code.jquery.com/jquery-1.12.4.min.js"></script>
    <script src="js/rss.js"></script>
  </body>
</html>
```





#### ✎ Exercise: Adding jQuery and updating the syntax

Go ahead and apply what you learnt from jQuery by adding it to your web page and rewriting the `rss.js` file with the new syntax.





#### Working with each property in an object

jQuery allows you to recreate the functionality of a loop through the properties of an object, using the `.each()` method.

There are times when you will want to loop through a collection of properties. Often this will be to perform a _series_ of actions on each of the elements. The `.each()` method is provided for this purpose.

At this moment we are repeating the same action on each of the properties contained in the `feedsLibrary` object:

```javascript
var ulNos = $('#nos');
ulNos.html('<a href="' + feedsLibrary.nos + '">NOS Feeds</a>');

var ulTelegraaf = $('#telegraaf');
ulTelegraaf.html('<a href="' + feedsLibrary.telegraaf + '">Telegraaf Feeds</a>');

var ulVolkskrant = $('#volkskrant');
ulVolkskrant.html('<a href="' + feedsLibrary.volkskrant + '">Volkskrant Feeds</a>');

var ulNrc = $('#nrc');
ulNrc.html('<a href="' + feedsLibrary.nrc + '">NRC Feeds</a>');
```

Let's see how we could write this without repeating ourselves by using the `.each()` method:

```javascript
var feedsLibrary = {
  nos: "http://feeds.nos.nl/nosjournaal",
  telegraaf: "http://www.telegraaf.nl/rss/",
  volkskrant: "http://www.volkskrant.nl/nieuws/rss.xml",
  nrc: "http://www.nrc.nl/rss/",
};

$.each(feedsLibrary, function(key, value) {
  var ulElement = $('#' + key);
  ulElement.html('<a href="' + value + '">' + value +'</a>');
});
```

The first parameter of the `.each()` method is the object through which we want to loop and the second is a **function**. Functions let you group a series of statements together to perform a specific task.

In this case we are defining a function that first selects an element in the HTML and afterwards place a link inside that element.





#### ✎ Exercise: Looping through feedsLibrary

Use the `.each()` method to loop through the `feedsLibrary` and render the feed urls in your web page. You web page should end up looking the same.





## Yahoo Query Language (YQL)

The [YQL](https://developer.yahoo.com/yql/) (Yahoo! Query Language) platform enables you to query, filter, and combine data across the web through a single interface. It uses a **SQL-like syntax** that is expressive enough for getting the right data.

_(We won't be going deep into SQL in this tutorial. It is enough for now that you know that SQL is just a special-purpose programming language designed for managing data stored in databases.)_

#### Exploring YQL

YQL is ridiculously easy to work with. In our case, we'll use it for a very simple purpose: grab the RSS feed for each of the sites, passing them through the query string. We will be using the JSON form of the data.

Check in the image below how it would look like for the case of NOS:

[![](https://raw.githubusercontent.com/Codaisseur/taste-of-code-rss-reader/master/screenshots/05-yql-01.png)](https://raw.githubusercontent.com/Codaisseur/taste-of-code-rss-reader/master/screenshots/05-yql-01.png)

Do you see that **endpoint** at the bottom of the page? That's the URL where we need to go to retrieve our feeds. That data is stored somewhere in the world within a web server.

Let's go and visit that URL address:

[![](https://raw.githubusercontent.com/Codaisseur/taste-of-code-rss-reader/master/screenshots/05-yql-02.png)](https://raw.githubusercontent.com/Codaisseur/taste-of-code-rss-reader/master/screenshots/05-yql-02.png)

What we see there it's an **object** in JSON form, from which we are specially interested in grabbing the values of the **link** and **title** of each of the items.

To query an RSS feed, we will be using the following query string:

```sql
SELECT * FROM feed WHERE url="path/to/rss/feed" LIMIT 5
```

Remember that we are storing our paths to the rss feeds in the `feedsLibrary` object:

```javascript
var feedsLibrary = {
  nos: "http://feeds.nos.nl/nosjournaal",
  telegraaf: "http://www.telegraaf.nl/rss/",
  volkskrant: "http://www.volkskrant.nl/nieuws/rss.xml",
  nrc: "http://www.nrc.nl/rss/",
};
```





#### ✎ Exercise: Visiting the Endpoints

Check out the different endpoints for the sites that you stored under the `feedsLibrary`.





## Ajax

The browser requests information from a web server using **Ajax**. It then processes the server's response and shows it within the page.

#### How Ajax Works

**1) The Request**

The browser requests information/data from the server.

**2) On the Server**

When there is an Ajax request, the server might send back HTML, or it might send data in a different format such as JSON (in the case of YQL) or XML (which the browser turns into HTML).

**3) The Response**

The browser processes the content and adds it to the page. When the server has finished responding to the request, the browser will fire an event that is used to trigger a JavaScript function that will process the data and incorporate it into the page.





#### Building the path for the request

This is how the URL address (endpoint) from where we will be requesting the data looks like:

```
https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20feed%20WHERE%20url%3D%27http%3A%2F%2Ffeeds.nos.nl%2Fnosjournaal%27%20LIMIT%205&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys
```

We need to build up that URL address for each of the sites in our `rss.js` file. For the sake of readability, we will be building up our YQL query in sections, and we need to make sure that we url encode the query to replace any special characters:

```javascript
// js/rss.js

var baseUrl = "http://query.yahooapis.com/v1/public/yql?q=";
var queryString = encodeURI("SELECT * FROM feed WHERE url='" + nosUrl + "' LIMIT 5");
var format = "&format=json";

var rssFeedPath = baseUrl.concat(queryString, format);
```





#### ✎ Exercise: Printing out the rss feeds paths

Apply everything you know of YQL and Ajax and print out the path for each of the sites that you are following in the JavaScript console.

The result should look like something similar to this:

[![](https://raw.githubusercontent.com/Codaisseur/taste-of-code-rss-reader/master/screenshots/06-ajax-02.png)](https://raw.githubusercontent.com/Codaisseur/taste-of-code-rss-reader/master/screenshots/06-ajax-02.png)





#### Handling Ajax Requests & Responses

jQuery provides several methods that handle Ajax requests. The process involves two steps: making a request and handling the response.

In this case we will need to load JSON data from a web server and the `.getJSON()` method is the one that helps us doing so.

```javascript
$.getJSON(url, function(response) {
  // Do something with the response
});
```

* `url` specifies where the data is fetched from
* `function(response) {}` indicates the function to be called when data is returned





#### ✎ Exercise: Printing out the response in the console


Using the .getJSON() method, print out the value of the response coming from the web server into the JavaScript console for each of the rss feeds paths.

The result should look like something similar to this:

[![](https://raw.githubusercontent.com/Codaisseur/taste-of-code-rss-reader/master/screenshots/06-ajax-03.png)](https://raw.githubusercontent.com/Codaisseur/taste-of-code-rss-reader/master/screenshots/06-ajax-03.png)

When you are done with it, go ahead and print out `response.query`, `response.query.results` and `response.query.results.item`.





#### Retrieving articles title and link

When we print out `response.query.results.item` what we get is an **array** of objects.

[![](https://raw.githubusercontent.com/Codaisseur/taste-of-code-rss-reader/master/screenshots/06-ajax-04.png)](https://raw.githubusercontent.com/Codaisseur/taste-of-code-rss-reader/master/screenshots/06-ajax-04.png)

Arrays are another way of storing data as a collection. In this case what we get is a collection of articles. We can access the data for each of those articles (or `feedItems` ;) ) as follows:

```javascript
var feedItems = response.query.results.item;

// First item data
link1 = feedItems[0].link;
title1 = feedItems[0].title;

// Second item data
link2 = feedItems[1].link;
title2 = feedItems[1].title;

// Third item data
link3 = feedItems[2].link;
title3 = feedItems[2].title;

// ...
```

`[0]`, `[1]` and`[2]` are the **index** of the elements, which represents the position of the element within the array.





#### ✎ Exercise: Printing out the articles links and titles in the console

Go ahead and print out each of the articles links and titles in the console. The result should look like something similar to this:

[![](https://raw.githubusercontent.com/Codaisseur/taste-of-code-rss-reader/master/screenshots/06-ajax-05.png)](https://raw.githubusercontent.com/Codaisseur/taste-of-code-rss-reader/master/screenshots/06-ajax-05.png)

It looks like we are repeating the same action over each of the items in the `feedItems` collection. Do you remember the `.each()` method? That's what we used to loop through the `feedsLibrary` object. It looks that we might need something similar in this case...

This is how you can use the `.each()` method to loop through an array:

```javascript
$.each(itemsCollection, function(index) {
  var item = itemsCollection[index];

  // Do something with the item
});
```



#### ✎ Exercise: Rendering the articles links and titles in the web page

After all you learnt up until now, you should be able to render a list item including a link to each of the articles under each site. Make it so that every link opens in a new tab in your browser.

Give it a try! The result should look like something similar to this:

[![](https://raw.githubusercontent.com/Codaisseur/taste-of-code-rss-reader/master/screenshots/06-ajax-06.png)](https://raw.githubusercontent.com/Codaisseur/taste-of-code-rss-reader/master/screenshots/06-ajax-06.png)

Reading [this](http://api.jquery.com/append/) will give you an idea about how to _append_ a list item to an existing unordered list.


When you are done with it, go ahead, be creative and make every last change in your web page that you wish to make it look super awesome!
