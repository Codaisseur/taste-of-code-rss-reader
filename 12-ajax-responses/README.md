# AJAX Responses

Finally it's time retrieving the articles title and link

In the previous section, when you printed out `response.query.results.item` in the JavaScript console, what you got is an **array** of objects.

### 🌟 Arrays are another way that programmers have to store specific data as a collection.

[![](http://cd.sseu.re/06-ajax-04.png)](http://cd.sseu.re/06-ajax-04.png)

In this case, what you got was a collection of the last 5 articles for each of the sites. You can access the data for each of those articles (or `feedItems`) as follows:

```javascript
var feedItems = response.query.results.item

// First item data
link1 = feedItems[0].link
title1 = feedItems[0].title

// Second item data
link2 = feedItems[1].link
title2 = feedItems[1].title

// Third item data
link3 = feedItems[2].link
title3 = feedItems[2].title

// ...
```

### 🌟 `[0]` `[1]` `[2]` are called `index` and they represent the element position within the array.





## ✏️ Exercise

> Go ahead and print out each of the articles links and titles in the console. The result should look like something similar to this:
>
> [![](http://cd.sseu.re/06-ajax-05.png)](http://cd.sseu.re/06-ajax-05.png)
>
> #### 💣 Hint
>
> This is how the code would look like for the NOS case:
>
> ```javascript
> var nosUrl = "http://feeds.nos.nl/nosjournaal"
>
> var feedsLibrary = {
>   nos: nosUrl,
> }
>
> // Base query string variables
>
> var baseUrl = "http://query.yahooapis.com/v1/public/yql?q="
> var format = "&format=json"
>
> // NOS
>
> var nosList = $('#nos')
> var queryString = encodeURI("SELECT * FROM feed WHERE url='" + nosUrl + "' LIMIT 5")
> var rssFeedPath = baseUrl.concat(queryString, format)
>
> nosList.innerHTML = '<a href="' + rssFeedPath + '">' + rssFeedPath +'</a>'
>
> $.getJSON(rssFeedPath, function(response) {
>   var feedItems = response.query.results.item
>
>   // First article data
>   console.log(feedItems[0].link)
>   console.log(feedItems[0].title)
>
>   // Second article data
>   console.log(feedItems[1].link)
>   console.log(feedItems[1].title)
>
>   // Third article data
>   console.log(feedItems[2].link)
>   console.log(feedItems[2].title)
>
>   // Fourth article data
>   console.log(feedItems[3].link)
>   console.log(feedItems[3].title)
>
>   // Fifth article data
>   console.log(feedItems[4].link)
>   console.log(feedItems[4].title)
> })
> ```



## ✏️ Exercise

> It's time to render a list item including a link to each of the articles under each site. You can make it so that every link opens in a new tab in your browser. Give it a try! The result should look like something similar to this:
>
> [![](http://cd.sseu.re/20170208-kgosw.png)](http://cd.sseu.re/20170208-kgosw.png)
>
> #### 💣 Hint
>
> This is how the code would look like for NOS:
>
> ```javascript
> var nosUrl = "http://feeds.nos.nl/nosjournaal"
>
> var feedsLibrary = {
>   nos: nosUrl,
> }
>
> // Base query string variables
>
> var baseUrl = "http://query.yahooapis.com/v1/public/yql?q="
> var format = "&format=json"
>
> // NOS
>
> var nosList = $('#nos')
> var queryString = encodeURI("SELECT * FROM feed WHERE url='" + nosUrl + "' LIMIT 5")
> var rssFeedPath = baseUrl.concat(queryString, format)
>
> $.getJSON(rssFeedPath, function(response) {
>   var feedItems = response.query.results.item
>
>   nosList.append('<li><a target="_blank" href="' + feedItems[0].link + '">' + feedItems[0].title + '</a></li>')
>   nosList.append('<li><a target="_blank" href="' + feedItems[1].link + '">' + feedItems[1].title + '</a></li>')
>   nosList.append('<li><a target="_blank" href="' + feedItems[2].link + '">' + feedItems[2].title + '</a></li>')
>   nosList.append('<li><a target="_blank" href="' + feedItems[3].link + '">' + feedItems[3].title + '</a></li>')
>   nosList.append('<li><a target="_blank" href="' + feedItems[4].link + '">' + feedItems[4].title + '</a></li>')
> })
> ```
>

## 🚀 Challenge Yourself

> ### You love making things look beautiful?
>
> When you are done with it, go ahead, be creative and make every last change in your web page that you wish to make it look super awesome!

> ### You don't like repetition?
>
> You might be thinking that repeating the same action over each of the items in the `feedItems` collection and writing so much code doesn't really make sense... And you are totally right! Programmers normally loop through elements when doing the same thing over a collection. In order to do so, jQuery has the `.each()` method, and you can use it like this:
>
> ```javascript
> $.each(itemsCollection, function(index) {
>   var item = itemsCollection[index];
>
>   // Do something with the item
> });
> ```

## 🎩 Only for Coaches

> During this exercise, you should focus on:
>
> + Guiding students to understand AJAX responses and how to handle them.
> + Answering questions about how to write the necessary code to accomplish the exercise.
> + If there are some students that are done with this exercises, helping them to refactor their JavaScript code using loops instead. Check the solution for this option [here](https://github.com/Codaisseur/taste-of-code-rss-reader/blob/master/14-fine-tuning/code/rss.js).
>
> 📍 **Important.** Make sure that students focus on getting it working for one of the sites first, and later on get the other sites also working ;-) .
