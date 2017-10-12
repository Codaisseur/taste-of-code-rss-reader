# AJAX Requests

### 🌟 jQuery provides an easy way to handle AJAX requests.

Doing an AJAX request involves two different steps:
1. making a request
2. handling the response

You are making a **request** any time that you visit one of the endpoints of one of your news sites. The response is the data that comes back to you as an answer to your request.

### 🌟 Data comes in different flavors, and one of them is `JSON`.

At this moment, JSON is one of the most used formats to share data across the internet.
jQuery has a method called `getJSON` that helps you get any JSON from any URL that you want.

### 🌟 `$.getJSON()` makes a request to a specific URL and lets you do something with the data sent back in the response.

This is how it looks like:

```javascript
$.getJSON(url, function(response) {
  // Do something with the response
})
```
Things to note:
* `url` specifies where the data is fetched from.
* `function(response) { ... }` is the part where you can handle the response. More specificaly, within the curly braces (`{ }`) you tell your program what to do with the data of that response.

## ✏️ Exercise

> Using the `.getJSON()` method, print out the value of the value of `response.query.results.item` from the response into the JavaScript console for each of the rss feeds paths.
>
> The result should look like something similar to this:
>
> [![](http://cd.sseu.re/20170208-6q1sj.png)](http://cd.sseu.re/20170208-6q1sj.png)
>
> #### 💣 Hint (Spoiler alert)
>
> This is how the code would look like for the case of NOS:
>
> ```javascript
> var nosUrl = "http://feeds.nos.nl/nosjournaal"
>
> // Base query string variables
> var baseUrl = "http://query.yahooapis.com/v1/public/yql?q="
> var format = "&format=json"
>
> // NOS
> var nosList = $('#nos')
> var queryString = encodeURI("SELECT * FROM feed WHERE url='" + nosUrl + "' LIMIT 5")
> var rssFeedPath = baseUrl.concat(queryString, format)
>
> nosList.append('<a href="' + rssFeedPath + '">' + rssFeedPath +'</a>')
>
> $.getJSON(rssFeedPath, function(response) {
>   console.log(response.query.results.item)
> })
>
> // Below, you do somewhat the same for your other RSS feeds.
> ```

## 💡 Tips & Tricks

> ### How to print text in the JavaScript Console
>
> You can print anything you want in the JavaScript console using the `console.log()` method. Let's look at an example:
>
> ```javascript
> console.log("Hello Taste of Code")
> ```
>
> [![](http://cd.sseu.re/20170209-nb7mc.png)](http://cd.sseu.re/20170209-nb7mc.png)

## 🎩 Only for Coaches

> During this exercise, you should focus on:
>
> + Guiding students to understand AJAX requests and how to make one.
> + Answering questions about how to write the necessary code to accomplish the exercise.
>
> 📍 **Important.** Make sure that students focus on getting it working for one of the sites first, and later on get the other sites also working ;-) .
