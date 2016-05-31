var feedsLibrary = {
  nos: "http://feeds.nos.nl/nosjournaal",
  telegraaf: "http://www.telegraaf.nl/rss/",
  volkskrant: "http://www.volkskrant.nl/nieuws/rss.xml",
  nrc: "http://www.nrc.nl/rss/",
};

$.each(feedsLibrary, function(siteId, feedsUrl) {

  // YQL query (SELECT * from feed ... ) // Split for readability
  var baseUrl = "http://query.yahooapis.com/v1/public/yql?q=";
  var queryString = encodeURI("SELECT * FROM feed WHERE url='" + feedsUrl + "' LIMIT 5");
  var format = "&format=json";

  var rssFeedPath = baseUrl.concat(queryString, format);

  // Print out rssFeedPath via the console
  console.log(rssFeedPath);

  var ulElement = $('#' + siteId);
  ulElement.html('<a href="' + feedsUrl + '">' + feedsUrl +'</a>');

});
