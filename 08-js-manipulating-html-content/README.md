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

## Manipulating HTML content

You are going to manipulate the content of your HTML page using JavaScript. To do that, let's first add an extra script to the `index.html` page, this time located just before the closing `</body>` tag, but **after** the loading of the jQuery library. Like so:

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

var nosList = $('#nos')
nosList.append('<a href="' + nosUrl + '">' + nosUrl +'</a>')
```

If you refresh the page, you should see the following output:

[![](http://cd.sseu.re/20170208-cvsiy.png)](http://cd.sseu.re/20170208-cvsiy.png)



## ✏️ Exercise

> 1. Create a new file `rss.js` under the `toc-rss-reader` folder in Atom.
>
> 2. Visit the site [Nederlandse rss feeds](http://www.nationalemediasite.nl/rss-feeds.php) or [rss feeds startpagina](http://rss-feeds.startpagina.nl/) and select 4 rss feeds that you want to follow. Find out each of the feed URLs for those sites.
>
> 3. Back in your editor, store each of feed URLS in a variable under the `rss.js` file.
>
> 4. Show each of the feed URLs stored in those newly defined variables under its corresponding unordered list. Your web page should end up looking something like this:
>
> [![](http://cd.sseu.re/20170208-f0ebf.png)](http://cd.sseu.re/20170208-f0ebf.png)



## 🎩 Only for Coaches

> During this exercise, you should focus on:
>
> + Helping students to properly include jQuery in their `index.html` file.
> + Guiding students to understand how to write an object to list the feeds sites.
> + Answering questions about how to write the HTML and JavaScript code to render the desired output
> + Helping students to find out some feed urls storing them in their respective variables.
>
> 📍 **Important.** Make sure that students focus on getting it working for one of the sites first, and later on work on the other sites ;-) .
