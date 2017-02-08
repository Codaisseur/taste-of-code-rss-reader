# Introduction to CSS

### 🌟 CSS is a stylesheet language that describes the presentation of an HTML document, defining how elements must be rendered on screen, on paper, or in other media.

With CSS, you can control a lot of things related to how your page looks like:

+ color of the text
+ style of fonts
+ spacing between paragraphs
+ how columns are sized and laid out
+ what background images or colors are used
+ layout designs
+ variations in display for different devices and screen sizes
+ ...

You can write CSS directly into your `index.html` file inside the `<head>` tag using the `<style></style>` tag, like so:

```html
<!-- index.html -->

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
    <!-- ... -->
  </body>
</html>
```

The code above will set all `h1` tags appearing in the page to be red, like so:

[![](http://cd.sseu.re/20170208-zmuor.png)](http://cd.sseu.re/20170208-zmuor.png)

When you want to write any CSS style rule, you should always define the following elements:

* **Selector** − Any HTML tag (like `<h1>` or `<table>`) on which the style will be applied.
* **Property** - A type of attribute of HTML tag. They could be `color`, `border` etc.
* **Value** - Assigned to properties. For example, the `color` property can have a `red` value.

[![](http://cd.sseu.re/20170208-6ohiu.png)](http://cd.sseu.re/20170208-6ohiu.png)

Now it's time for you to practice!





## ✏️ Exercise

> Change the `background-color` of your HTML page to `green`, like so:
>
> [![](http://cd.sseu.re/20170208-jysjc.png)](http://cd.sseu.re/20170208-jysjc.png)





## 💡 Tips & Tricks

> ### How to see the new styles in Chrome
>
> Assuming that you left the `index.html` file open in Chrome, if you now refresh the page, you should see the changes you just made directly applied to your page!


## 🎩 Only for Coaches

> During this exercise, you should focus on:
>
> + Guide students to understand how to write different CSS style rules.
> + Answer questions about how to write the HTML and CSS code to render the desired output.
