// Feed URLs variables

var nosUrl = "http://feeds.nos.nl/nosjournaal"
var telegraafUrl = "http://www.telegraaf.nl/rss/"
var volkskrantUrl = "http://www.volkskrant.nl/nieuws/rss.xml"
var nrcUrl = "http://www.nrc.nl/rss/"

// Base query string variables

var baseUrl = "http://query.yahooapis.com/v1/public/yql?q="
var format = "&format=json"

// NOS

var nosList = $('#nos')
var queryString = encodeURI("SELECT * FROM feed WHERE url='" + nosUrl + "' LIMIT 5")
var rssFeedPath = baseUrl + queryString + format

nosList.append('<a href="' + rssFeedPath + '">' + rssFeedPath +'</a>')

// Telegraaf

var telegraafList = $('#telegraaf')
var queryString = encodeURI("SELECT * FROM feed WHERE url='" + telegraafUrl + "' LIMIT 5")
var rssFeedPath = baseUrl + queryString + format

telegraafList.append('<a href="' + rssFeedPath + '">' + rssFeedPath +'</a>')

// Volkskrant

var volkskrantList = $('#volkskrant')
var queryString = encodeURI("SELECT * FROM feed WHERE url='" + volkskrantUrl + "' LIMIT 5")
var rssFeedPath = baseUrl + queryString + format

volkskrantList.append('<a href="' + rssFeedPath + '">' + rssFeedPath +'</a>')

// NRC

var nrcList = $('#nrc')
var queryString = encodeURI("SELECT * FROM feed WHERE url='" + nrcUrl + "' LIMIT 5")
var rssFeedPath = baseUrl + queryString + format

nrcList.append('<a href="' + rssFeedPath + '">' + rssFeedPath +'</a>')
