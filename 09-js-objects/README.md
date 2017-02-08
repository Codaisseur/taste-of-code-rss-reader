# jQuery

### 🌟 From now on, you will be using jQuery to write some of the JavaScript code. jQuery is a library that helps doing some tasks in JavaScript easier.

To include jQuery in your project, you can use the same `<script>` tag that you used to include the `greeting.js` file, like so:

```html
<!-- index.html -->

<!DOCTYPE html>
<html>
  <head>
    <title>RSS Personal Reader</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
 </head>
  <body>
    <!-- ... -->

    <script src="http://code.jquery.com/jquery-1.12.4.min.js"></script>
  </body>
</html>
```

📍 **Important.** Notice that this `<script>` tag was included just before the `</body` closing tag.





# JavaScript Objects

You already know that variables are containers for data values, where you can store any data we wish. Now it's time to learn a bit more about objects!

### 🌟 Objects group together a set of variables to create a model of something you would recognize from the real world. In an object, variables become known as properties.

An example of an object could be a "library", where a collection of feed URLs are stored categorized by site. This object could be represented like this in JavaScript:

```javascript
// greeting.js

var feedsLibrary = {
  nos: "http://feeds.nos.nl/nosjournaal",
}
```

### 🌟 Every property in an object has a name (programmers call it `key`) and a `value`.

In the previous example, `nos` is the key of the property and `http://feeds.nos.nl/nosjournaal` its value.

[![](http://cd.sseu.re/20170208-2fc5s.png)](http://cd.sseu.re/20170208-2fc5s.png)





## Manipulating HTML content

You are going to manipulate the content of your HTML page using JavaScript. To do that, let's first add an extra script to the `index.html` page, this time located just before the closing `</body>` tag, like so:

```html
<!-- index.html -->

<!DOCTYPE html>
<html>
  <head>
    <title>RSS Personal Reader</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
  </head>

  <body>
    <!-- ... -->

    <script src="http://code.jquery.com/jquery-1.12.4.min.js"></script>
    <script src="rss.js"></script>
  </body>
</html>
```

📍 **Important:** Notice that the `<script>` tag importing jQuery is placed before the `rss.js` file.


### 🌟 You already know how to use classes to identify certain elements in your HTML page. You can also use `id`'s to do so, and it works in a similar way.

For example, you can add an `id` with the name `nos` to an unordered list, like so:

```html
<!-- index.html -->

<!DOCTYPE html>
<html>
  <head>
    <title>RSS Personal Reader</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
  </head>

  <body>
    <script src="greeting.js"></script>

    <h1 class="main-title"> RSS Personal Reader </h1>

    <h3 class="site-title">NOS Nieuws</h3>
    <ul id="nos"></ul>

    <!-- ... -->

    <script src="http://code.jquery.com/jquery-1.12.4.min.js"></script>
    <script src="rss.js"></script>
  </body>
</html>
```

As an example, let's see how to show the value of the `nosUrl` variable within the `nos` unordered list with JavaScript:

```javascript
// rss.js

var nosUrl = "http://feeds.nos.nl/nosjournaal"

var feedsLibrary = {
  nos: nosUrl,
}

var nosList = $('#nos')
nosList.append('<a href="' + feedsLibrary.nos + '">' + feedsLibrary.nos +'</a>')
```

If you refresh the page, you should see the following output:

[![](http://cd.sseu.re/20170208-cvsiy.png)](http://cd.sseu.re/20170208-cvsiy.png)





## ✏️ Exercise

> Go ahead and show each of the feed URLs stored in the `feedLibrary` object under its corresponding unordered list. Your web page should end up looking something like this:
>
> [![](http://cd.sseu.re/20170208-f0ebf.png)](http://cd.sseu.re/20170208-f0ebf.png)



## 🎩 Only for Coaches

> During this exercise, you should focus on:
>
> + Helping students to properly include jQuery in their `index.html` file.
> + Guiding students to understand how to write an object to list the feeds sites.
> + Answering questions about how to write the HTML and JavaScript code to render the desired output
>
> 📍 **Important.** Make sure that students focus on getting it working for one of the sites first, and later on work on the other sites ;-) .
