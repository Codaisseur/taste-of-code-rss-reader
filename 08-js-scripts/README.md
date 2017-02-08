# JavaScript Scripts

### 🌟 A script is a series of instructions that a computer can follow step-by-step to achieve a goal.

To write a script, you need to:

1. Define your goal
2. List the tasks/instructions to meet your goal

It is recommended that you start with the big picture of what you want to achieve, and break that down into smaller steps later on.

Let's look at an example. The file `greeting.js` contains a script or program in charge of **adding a greeting into an HTML page**. The type of greeting changes depending on the time of the day:

```javascript
// greeting.js

var today = new Date()
var hourNow = today.getHours()

if (hourNow > 18) {
  var greeting = 'Good evening!'
} else if (hourNow > 12) {
  var greeting = 'Good afternoon!'
} else if (hourNow > 0) {
  var greeting = 'Good morning!'
} else {
  var greeting = 'Welcome!'
}

document.write('<h3 class="greeting">' + greeting + '</h3>')
```





## External JavaScript file

### 🌟 You can add any JavaScript file into a page using the `<script>` tag. Its `src` attribute tells the browser where the JavaScript file is stored.

JavaScript code runs exactly where it is found in the HTML. When the browser comes across a `<script>` element, it stops to load the script and checks to see if it needs to do anything.

In the following example, the location of the `greeting.js` script will affect where the it is written into the page:

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

    <h1 class="title"> RSS Personal Reader </h1>
    <!-- ... -->
  </body>
</html>
```





## ✏️ Exercise

> 1. Create a new file `greeting.js` under the `toc-rss-reader` folder.
>
> 2. Write a script inside the `greeting.js` that prints out different messages to the screen depending on the time of the day.
>
> 3. Import the `greeting.js` file into your HTML in any location that you would like it to appear. When you refresh the page, you should see now see a greeting message similar to this one:
>
> [![](http://cd.sseu.re/20170208-k3qyr.png)](http://cd.sseu.re/20170208-k3qyr.png)


## 🎩 Only for Coaches

> During this exercise, you should focus on:
>
> + Guiding students to understand the greeting script.
> + Helping students to properly create a new file `greeting.js` under their projects in Atom.
> + Answering questions about how to write the HTML and JavaScript code to render the desired output.
