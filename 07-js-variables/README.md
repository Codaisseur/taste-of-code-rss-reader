# Variables

Any script or program that you write, will need to temporarily store specific bits of information that it needs to do its job. This data is stored into **variables**.

### 🌟 You can think of variables as named containers or boxes that store information.

First, you place data into these containers and afterwards you can refer to the data simply by naming the container. In this example, a variable named `sum` is used to store the result of a calculation:

```javascript
var sum = 10 + 5
```

You can also use variables to store a piece of text (or string), like so:

```javascript
var greeting = "Good morning"
```

Or true/false values (or booleans):

```javascript
var buildingRSSReaderAtTOC = true
```

📍 **Important.** Don't forget to type the keyword `var` every time that you define a new variable.





# ✏️ Exercise: Storing Feed URLs

1. Create a new file `rss.js` under the `toc-rss-reader` folder in Atom.

2. Visit the site [NEDERLANDSE RSS FEEDS](http://www.nationalemediasite.nl/rss-feeds.php) and select 4 news sites that you want to follow. Find out each of the feed URLs for those sites.

3. Back in your editor, store each of feed URLS in a variable under the `rss.js` file. This is how an example with NOS feed URL would look like:

  ```javascript
  var nosUrl = "http://feeds.nos.nl/nosjournaal"
  ```
