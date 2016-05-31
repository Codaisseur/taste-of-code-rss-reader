var feedsLibrary = {
  nos: "http://feeds.nos.nl/nosjournaal",
  telegraaf: "http://www.telegraaf.nl/rss/",
  volkskrant: "http://www.volkskrant.nl/nieuws/rss.xml",
  nrc: "http://www.nrc.nl/rss/",
};

$.each(feedsLibrary, function(key, value) {
  var ulElement = $('#' + key);
  ulElement.html('<a href="' + value + '">' + value +'</a>');
});
