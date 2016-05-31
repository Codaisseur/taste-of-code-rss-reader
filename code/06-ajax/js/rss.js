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

  $.getJSON(rssFeedPath, function(response) {

    // Print out the response via the console
    console.log(response);
    console.log(response.query);
    console.log(response.query.results);
    console.log(response.query.results.item);

    var feedItems = response.query.results.item;

    $.each(feedItems, function( index ) {
      var item = feedItems[index];

      // Print out the link and title via the console
      console.log(item.link);
      console.log(item.title);

      var link = item.link;
      var title = item.title;

      var ulElement = $('#' + siteId);
      ulElement.append('<li><a target="_blank" href="' + link + '">' + title +'</a></li>');

    });

  });
});
