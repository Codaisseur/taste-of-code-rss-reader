# Introduction to Ajax

### 🌟 The browser requests information from a web server using Ajax**. It then processes the server's response and shows it within the page.

[![](http://cd.sseu.re/20170208-8b1cq.png)](http://cd.sseu.re/20170208-8b1cq.png)

**1) Request.** The browser requests information/data from the server.

**2) On the Server.** When there is an Ajax request, the server might send back HTML, or it might send data in a different format such as JSON (in the case of YQL) or XML (which the browser turns into HTML).

**3) Response.** The browser processes the content and adds it to the page. When the server has finished responding to the request, the browser will fire an event that is used to trigger a JavaScript function that will process the data and incorporate it into the page.





## Building up the path to make the request

In the previous exercise, you visited the different endpoints corresponding to each of the news sites provided by YQL. This is how that URL address (endpoint) looked like for the case of NOS:

```
https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20feed%20WHERE%20url%3D%27http%3A%2F%2Ffeeds.nos.nl%2Fnosjournaal%27%20LIMIT%205&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys
```

Now it's time to build up that URL address for each of the sites in your `rss.js` file. For the sake of readability, you will be building up that YQL query in different steps, making sure that you "url encode" the query to replace any special characters.

Let's look at an example of how to do that for the case of NOS:

```javascript
// rss.js

var nosUrl = "http://feeds.nos.nl/nosjournaal"

var baseUrl = "http://query.yahooapis.com/v1/public/yql?q=";
var queryString = encodeURI("SELECT * FROM feed WHERE url='" + nosUrl + "' LIMIT 5");
var format = "&format=json";

var rssFeedPath = baseUrl.concat(queryString, format);
```





## ✏️ Exercise

> Apply everything you know of YQL and Ajax and print out the endpoint for each of the sites that you are following where you used to print out the RSS feed URL.
>
> The result should look like something similar to this:
>
> [![](http://cd.sseu.re/20170208-o4yoi.png)](http://cd.sseu.re/20170208-o4yoi.png)

## 🎩 Only for Coaches

> During this exercise, you should focus on:
>
> + Answering questions about how to write the HTML and JavaScript code to render the desired output.
>
> 📍 **Important.** Make sure that students focus on getting it working for one of the sites first, and later on get the other sites also working ;-) .
