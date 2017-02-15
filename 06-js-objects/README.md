# Objects & Properties

### 🌟 In computer programming, each thing in the world can be represented as an object. Each object has its own `properties` (characteristics) and `methods` (or behavior).

Let's look at three examples of objects in JavaScript:

+ **`window`.** Represents each **window or tab** in your browser.
+ **`document`.** Represents the **web page or content** within a specific window or tab.
+ **`console`.** Provides access to the browser's debugging console.

Let's look at what you can do with each of them with some examples.

You can check the `location` property of the `window` object to know more about the URL of the current page, like so:

```javascript
window.location
```

[![](http://cd.sseu.re/20170208-ay50l.png)](http://cd.sseu.re/20170208-ay50l.png)

You can also use the `window` object to create an alert box with some text by using the `.alert()` method, like so:

```javascript
window.alert("Hello")
```

[![](http://cd.sseu.re/20170208-l47tj.png)](http://cd.sseu.re/20170208-l47tj.png)


You can also get the title of the current page using the `document` object and checking its `title` property. This property will tell you the content that was specified between the opening `<title>` and closing `</title>` tag for that web page, like so:

```javascript
document.title
```

[![](http://cd.sseu.re/20170208-tjy9n.png)](http://cd.sseu.re/20170208-tjy9n.png)

You can even use the `document` object to print something in the page with the `write()` method:

```javascript
document.write("Nice to see you!")
```

[![](http://cd.sseu.re/20170208-1tai8.png)](http://cd.sseu.re/20170208-1tai8.png)

Last, you can use the `console` object to print anything you want inside the console itself with the `log` method:

```javascript
console.log("You will see this message in the console!")
```





## ✏️ Exercise

> Use the JavaScript console on your browser to complete the following tasks:
>
> * Inspect the title of a couple of your favorites pages
> * Open up an alert box in the current window
> * Replace the current content of a page with any text you want

## 💡 Tips & Tricks

> ### What else can I do with the `window` object?
>
> Visit [this article](http://www.w3schools.com/jsref/obj_window.asp) to know more about the properties and methods of the `window` object.
>
> ### What else can I do with the `document` object?
>
> Visit [this article](http://www.w3schools.com/jsref/dom_obj_document.asp) to know more about the properties and methods of the `document` object.


## 🎩 Only for Coaches

> During this exercise, you should focus on:
>
> + Guiding students to use the JavaScript console in their browsers to accomplish each of the tasks.
