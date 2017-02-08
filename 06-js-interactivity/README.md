# JavaScript Interactivity

There are different ways in which JavaScript can make your web pages more interactive:

1. **Access Content.** Select any element, attribute or text from an HTML page. For example, you can select any elements that have a class attribute with a value of `warning`.

2. **Modify Content.** Add elements, attributes and text to the page, or remove them. For example, you can add a paragraph of text after the first `<h1>` element.

3. **Program Rules or Instructions.** Specify a set of steps for the browser to follow (like a recipe), which allows it to access or change the content of a page. For example, you can write a RSS feed script that checks which link a user clicked on and redirect him/her to the article page (which you will learn to do today ;-) ).

4. **React to Events:** Specify that a script should run when a specific event has occurred. For example, when a button is pressed or a web page has finished loading.

Before diving deeper into how to read and write JavaScript itself, you need to be familiar with some key concepts in computer programming. Let's check them out!





# Objects & Properties

### 🌟 In computer programming, each thing in the world can be represented as an object. Each object has its own `properties` (characteristics) and `methods` (or behavior).

There are two important objects that you should know about when thinking of your browser:

+ **`window`.** Represents each **window or tab** in your browser.
+ **`document`.** Represents the **web page or content** within a specific window or tab.

Let's look at what you can do with each of them with some examples.

You can check the `location` property of the `window` object to know more about the URL of the current page, like so:

```javascript
window.location
```

[![](http://cd.sseu.re/20170208-ay50l.png)](http://cd.sseu.re/20170208-ay50l.png)

You can also use the `window` object to create an alert box with some text by using the `.alert()` method, like so:

```javascript
window.alert('Hello')
```

[![](http://cd.sseu.re/20170208-l47tj.png)](http://cd.sseu.re/20170208-l47tj.png)


You can also get the title of the current page using the `document` object and checking its `title` property. This property will tell you the content that was specified between the opening `<title>` and closing `</title>` tag for that web page, like so:

```javascript
document.title
```

[![](http://cd.sseu.re/20170208-tjy9n.png)](http://cd.sseu.re/20170208-tjy9n.png)

Last, you can even use the `document` object to print something in the page with the `write()` method:

```javascript
document.write('Nice to see you!')
```

[![](http://cd.sseu.re/20170208-1tai8.png)](http://cd.sseu.re/20170208-1tai8.png)





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
