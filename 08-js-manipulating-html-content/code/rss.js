// Feed URLs variables

var nosUrl = "http://feeds.nos.nl/nosjournaal"
var telegraafUrl = "http://www.telegraaf.nl/rss/"
var volkskrantUrl = "http://www.volkskrant.nl/nieuws/rss.xml"
var nrcUrl = "http://www.nrc.nl/rss/"

// NOS

var nosList = $('#nos')
nosList.append('<a href="' + nosUrl + '">' + nosUrl +'</a>')

// Telegraaf

var telegraafList = $('#telegraaf')
telegraafList.append('<a href="' + telegraafUrl + '">' + telegraafUrl +'</a>')

// Volkskrant

var volkskrantList = $('#volkskrant')
volkskrantList.append('<a href="' + volkskrantUrl + '">' + volkskrantUrl +'</a>')

// NRC

var nrcList = $('#nrc')
nrcList.append('<a href="' + nrcUrl + '">' + nrcUrl +'</a>')
