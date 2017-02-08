# Making Ajax Requests

### 🌟 jQuery provides an easy way to handle Ajax requests, involving two different steps: **making a request and handling the response**.

In this case, you make a request when visiting any of the endpoints of each of your news sites. You can think of the response as all the data that comes back to you after doing that.

The data comes back in a "special" format, called JSON. jQuery has a method called `.getJSON()` that does just that: **making a request to a specific URL and letting you do something with the data in the response**. This is how it looks like:

```javascript
$.getJSON(url, function(response) {
  // Do something with the response
})
```

* `url`. It specifies where the data is fetched from.
* `function(response) {}`. It tells your program what to do when the data is returned from the previous url.





# ✏️ Exercise: Printing out the Response

Using the `.getJSON()` method, print out the value of the value of `response.query.results.item` from the response into the JavaScript console for each of the rss feeds paths.

The result should look like something similar to this:

[![](http://cd.sseu.re/20170208-6q1sj.png)](http://cd.sseu.re/20170208-6q1sj.png)

**💣 Hint.** This is how the code would look like for the case of NOS:

```javascript
// Base query string variables

var baseUrl = "http://query.yahooapis.com/v1/public/yql?q="
var format = "&format=json"

// NOS

var nosList = document.getListById('nos')
var queryString = encodeURI("SELECT * FROM feed WHERE url='" + nosUrl + "' LIMIT 5")
var rssFeedPath = baseUrl.concat(queryString, format)

nosList.innerHTML = '<a href="' + rssFeedPath + '">' + rssFeedPath +'</a>'

$.getJSON(rssFeedPath, function(response) {
  console.log(response.query.results.item)
})
```
