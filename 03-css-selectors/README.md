# CSS Selectors

### 🌟 You can select any element in your HTML using its `class name` to apply any CSS style rules that you want.

You already know how to select all the `h1` tags in your page and set their color to red, like so:

```html
<!-- index.html -->

<!DOCTYPE html>
<html>
  <head>
    <title>RSS Personal Reader</title>
    <style>
      h1 {
        color: red;
      }
    </style>
  </head>

  <body>
    <h1>RSS Personal Reader</h1>
    <!-- ... -->
  </body>
</html>
```

**But what if you only want to change the color of ONE specific `h1` tag?** You are so right! In that case you should use **classes**!

You can assign a class to any HTML tag in your `index.html` file and define a name for it, like so:

```html
<!-- index.html -->

<!DOCTYPE html>
<html>
  <!-- ... -->

  <body>
    <h1 class="warning">RSS Personal Reader</h1>

    <!-- ... -->
  </body>
</html>
```

After that, you can just write the CSS style rule to change its color by directly targeting its class name `warning`, like so:

```html
<!-- index.html -->

<!DOCTYPE html>
<html>
  <head>
    <title>RSS Personal Reader</title>
    <style>
      .main-title {
        color: red;
      }
    </style>
  </head>

  <body>
    <h1 class="main-title">RSS Personal Reader</h1>

    <!-- ... -->
  </body>
</html>
```

Now it's time for you to practice!




## ✏️ Exercise

> Apply the `main-title` class to the main heading `h1` in your page, and change its color to anything you want ;-) .





## 💡 Tips & Tricks

> ### Curious about CSS properties?
>
> You can check [here](http://www.w3schools.com/cssref/default.asp) a complete list of the CSS properties available.




## 🎩 Only for Coaches

> During this exercise, you should focus on:
>
> + Guiding students to understand the concept of classes and how to use them in CSS.
> + Answer questions about how to write the HTML and CSS code to render the desired output.
