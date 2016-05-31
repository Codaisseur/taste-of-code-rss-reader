var nosUrl = "http://feeds.nos.nl/nosjournaal";
var telegraafUrl = "http://www.telegraaf.nl/rss/";
var volkskrantUrl = "http://www.volkskrant.nl/nieuws/rss.xml";
var nrcUrl = "http://www.nrc.nl/rss/";

var feedsLibrary = {
  nos: nosUrl,
  telegraaf: telegraafUrl,
  volkskrant: volkskrantUrl,
  nrc: nrcUrl,
};

var ulNos = document.getElementById('nos');
ulNos.innerHTML = '<a href="' + feedsLibrary.nos + '" target="_blank">' + feedsLibrary.nos +'</a>';

var ulTelegraaf = document.getElementById('telegraaf');
ulTelegraaf.innerHTML = '<a href="' + feedsLibrary.telegraaf + '" target="_blank">' + feedsLibrary.telegraaf +'</a>';

var ulVolkskrant = document.getElementById('volkskrant');
ulVolkskrant.innerHTML = '<a href="' + feedsLibrary.volkskrant + '" target="_blank">' + feedsLibrary.volkskrant +'</a>';

var ulNrc = document.getElementById('nrc');
ulNrc.innerHTML = '<a href="' + feedsLibrary.nrc + '" target="_blank">' + feedsLibrary.nrc +'</a>';
