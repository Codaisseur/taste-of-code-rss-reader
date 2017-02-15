# Introduction to YQL (Yahoo Query Language)

### 🌟 The [YQL](https://developer.yahoo.com/yql/) platform enables you to query, filter, and combine data across the web through a single interface.

It uses a **SQL-like syntax** that is expressive enough for getting the right data. SQL is just a special-purpose programming language designed for managing data stored in databases.

YQL is ridiculously easy to work with. In this case, you will use it for a very simple purpose: **grabbing the RSS feed for each of the news sites**.

This is how it would look like for the case of NOS:

```sql
SELECT * FROM feed WHERE url="http://feeds.nos.nl/nosjournaal" LIMIT 5
```

Add that query into the **YQL query** field:

[![](http://cd.sseu.re/05-yql-01.png)](http://cd.sseu.re/05-yql-01.png)

**Do you see that ENDPOINT at the bottom of the page?** That's the URL where you need to go to retrieve your feeds (that data is stored somewhere in the world within a web server).

Copy that URL address and visit it in a new window in your browser:

[![](http://cd.sseu.re/05-yql-02.png)](http://cd.sseu.re/05-yql-02.png)

What you see there is an **object** in JSON form. Within that object, you are specially interested in grabbing the values of the **link** and **title** properties of each of the items.

Remember that you are storing the URLs to the rss feeds in the `feedsLibrary` object already in your `rss.js` file:

```javascript
// rss.js

var feedsLibrary = {
  nos: "http://feeds.nos.nl/nosjournaal",
  telegraaf: "http://www.telegraaf.nl/rss/",
  volkskrant: "http://www.volkskrant.nl/nieuws/rss.xml",
  nrc: "http://www.nrc.nl/rss/",
}
```

You will be using those up next. But first, it's time to practice!



## ✏️ Exercise

> Check out the different feeds URLs for the sites that you stored under the `feedsLibrary` object in your `rss.js` file in the [YQL site](https://developer.yahoo.com/yql/).

## 🎩 Only for Coaches

> During this exercise, you should focus on:
>
> + Guiding students to find their way to SQL and visit the different URLs or endpoints for each of the sites in their `rss.js` file.
>
> 📍 **Important.** Make sure that students focus on getting it working for one of the sites first, and later on work on the other sites ;-) .
