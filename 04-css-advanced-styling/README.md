# CSS Advanced Styling

### 🌟 A screen consists of `pixels`. Any HTML element in your page will have a `width` and `height`, that you can define in `pixels`.

[![](http://cd.sseu.re/20170208-aqays.png)](http://cd.sseu.re/20170208-aqays.png)

### 🌟 Any HTML element in your page will have a `margin`'s and `padding`'s, that you can also define in `pixels`.

[![](http://cd.sseu.re/20170208-dckoh.png)](http://cd.sseu.re/20170208-dckoh.png)

Let's look at some examples of how you can define these CSS properties:

```css
p {
  padding: 30px;
  margin: 10px;
}

.main-title {
 padding: 10px;
}

#taste-of-code {
   margin: 25px;
}
```





## External CSS file

We all love things to be organized, and there is no difference when talking about code! Most developers out there like to move their CSS code out of their HTML files in a separate file.

### 🌟 Use the `<link>` HTML tag to import any CSS file into your HTML file. The `href` attribute tells the browser where the CSS file is stored.

Let's look at an example:

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
  </body>
</html>
```

**📍 Important.** Note that this piece of code is added within the `<head>` tag in your HTML file.





## ✏️ Exercise

> 1. Create a new file under the `toc-rss-reader` folder in Atom called `styles.css`. Move your CSS code from your `index.html` file into this file file.
>
> 2. Import the `styles.css` in your `index.html` file using the `<link>` tag.
>
>   **📍 Important.** Refresh your page in Chrome and make sure that no styles were lost in the process!
>
> 3. Replace the content of your `index.html` file with the following content before you start adding more styles.
>
>   **📍 Important.** To be able to follow the rest of the workshop, you need to have the same HTML elements and class names defined in your `index.html` file as below. And yes, it might be that you need to adjust some of the styles that you applied up until now to make sure they work with the new class names ;-) .
>
>   ```html
>   <!-- index.html -->
>
>   <!DOCTYPE html>
>   <html>
>     <head>
>       <title>RSS Personal Reader</title>
>       <link rel="stylesheet" type="text/css" href="styles.css">
>     </head>
>
>     <body>
>       <h1 class="main-title"> RSS Personal Reader </h1>
>
>       <h3 class="site-title">NOS Nieuws</h3>
>       <h3 class="site-title">Telegraaf Nieuws</h3>
>       <h3 class="site-title">Volkskrant Nieuws</h3>
>       <h3 class="site-title">NRC Nieuws</h3>
>
>       <h4 class="footer"> Made with &#10084; at Taste of Code </h4>
>     </body>
>   </html>
>   ```

## ✏️ Exercise

> Apply everything you know by now about the `width`, `height`, `margin` and `padding` CSS properties to style your page. If you still don't have anything in mind, you could try to do something like any of this:
>
> [![](http://cd.sseu.re/20170208-lzuf2.png)](http://cd.sseu.re/20170208-lzuf2.png)
>
> [![](http://cd.sseu.re/20170208-i686j.png)](http://cd.sseu.re/20170208-i686j.png)




## 💡 Tips & Tricks

> ### Need inspiration with colors?
>
> Sometimes it can be difficult to choose the right colors for a website. Visit [this cool site](http://www.lolcolors.com/) to help you with it!



## 🎩 Only for Coaches

> During this exercise, you should focus on:
>
> + Helping students to move their CSS code to an external file `styles.css`.
> + Guiding students to understand the concepts of `margin`, `padding`, `width` and `height`.
> + Answering questions about how to write the HTML code to render the desired output.
