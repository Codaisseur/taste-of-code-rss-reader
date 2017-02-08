  var nosUrl = "http://feeds.nos.nl/nosjournaal"
var telegraafUrl = "http://www.telegraaf.nl/rss/"
var volkskrantUrl = "http://www.volkskrant.nl/nieuws/rss.xml"
var nrcUrl = "http://www.nrc.nl/rss/"

var feedsLibrary = {
  nos: nosUrl,
  telegraaf: telegraafUrl,
  volkskrant: volkskrantUrl,
  nrc: nrcUrl,
}

// Base query string variables

var baseUrl = "http://query.yahooapis.com/v1/public/yql?q="
var format = "&format=json"

// NOS

var nosList = $('#nos')
var queryString = encodeURI("SELECT * FROM feed WHERE url='" + nosUrl + "' LIMIT 5")
var rssFeedPath = baseUrl.concat(queryString, format)

$.getJSON(rssFeedPath, function(response) {
  var feedItems = response.query.results.item

  nosList.append('<li><a target="_blank" href="' + feedItems[0].link + '">' + feedItems[0].title + '</a></li>')
  nosList.append('<li><a target="_blank" href="' + feedItems[1].link + '">' + feedItems[1].title + '</a></li>')
  nosList.append('<li><a target="_blank" href="' + feedItems[2].link + '">' + feedItems[2].title + '</a></li>')
  nosList.append('<li><a target="_blank" href="' + feedItems[3].link + '">' + feedItems[3].title + '</a></li>')
  nosList.append('<li><a target="_blank" href="' + feedItems[4].link + '">' + feedItems[4].title + '</a></li>')
})

// Telegraaf

var telegraafList = $('#telegraaf')
var queryString = encodeURI("SELECT * FROM feed WHERE url='" + telegraafUrl + "' LIMIT 5")
var rssFeedPath = baseUrl.concat(queryString, format)

$.getJSON(rssFeedPath, function(response) {
  var feedItems = response.query.results.item

  telegraafList.append('<li><a target="_blank" href="' + feedItems[0].link + '">' + feedItems[0].title + '</a></li>')
  telegraafList.append('<li><a target="_blank" href="' + feedItems[1].link + '">' + feedItems[1].title + '</a></li>')
  telegraafList.append('<li><a target="_blank" href="' + feedItems[2].link + '">' + feedItems[2].title + '</a></li>')
  telegraafList.append('<li><a target="_blank" href="' + feedItems[3].link + '">' + feedItems[3].title + '</a></li>')
  telegraafList.append('<li><a target="_blank" href="' + feedItems[4].link + '">' + feedItems[4].title + '</a></li>')
})

// Volkskrant

var volkskrantList = $('#volkskrant')
var queryString = encodeURI("SELECT * FROM feed WHERE url='" + volkskrantUrl + "' LIMIT 5")
var rssFeedPath = baseUrl.concat(queryString, format)

$.getJSON(rssFeedPath, function(response) {
  var feedItems = response.query.results.item

  volkskrantList.append('<li><a target="_blank" href="' + feedItems[0].link + '">' + feedItems[0].title + '</a></li>')
  volkskrantList.append('<li><a target="_blank" href="' + feedItems[1].link + '">' + feedItems[1].title + '</a></li>')
  volkskrantList.append('<li><a target="_blank" href="' + feedItems[2].link + '">' + feedItems[2].title + '</a></li>')
  volkskrantList.append('<li><a target="_blank" href="' + feedItems[3].link + '">' + feedItems[3].title + '</a></li>')
  volkskrantList.append('<li><a target="_blank" href="' + feedItems[4].link + '">' + feedItems[4].title + '</a></li>')
})

// NRC

var nrcList = $('#nrc')
var queryString = encodeURI("SELECT * FROM feed WHERE url='" + nrcUrl + "' LIMIT 5")
var rssFeedPath = baseUrl.concat(queryString, format)

$.getJSON(rssFeedPath, function(response) {
  var feedItems = response.query.results.item

  nrcList.append('<li><a target="_blank" href="' + feedItems[0].link + '">' + feedItems[0].title + '</a></li>')
  nrcList.append('<li><a target="_blank" href="' + feedItems[1].link + '">' + feedItems[1].title + '</a></li>')
  nrcList.append('<li><a target="_blank" href="' + feedItems[2].link + '">' + feedItems[2].title + '</a></li>')
  nrcList.append('<li><a target="_blank" href="' + feedItems[3].link + '">' + feedItems[3].title + '</a></li>')
  nrcList.append('<li><a target="_blank" href="' + feedItems[4].link + '">' + feedItems[4].title + '</a></li>')
})
