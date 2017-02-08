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

// NOS

var nosList = $('#nos')
nosList.append('<a href="' + feedsLibrary.nos + '">' + feedsLibrary.nos +'</a>')

// Telegraaf

var telegraafList = $('#telegraaf')
telegraafList.append('<a href="' + feedsLibrary.telegraaf + '">' + feedsLibrary.telegraaf +'</a>')

// Volkskrant

var volkskrantList = $('#volkskrant')
volkskrantList.append('<a href="' + feedsLibrary.volkskrant + '">' + feedsLibrary.volkskrant +'</a>')

// NRC

var nrcList = $('#nrc')
nrcList.append('<a href="' + feedsLibrary.nrc + '">' + feedsLibrary.nrc +'</a>')
