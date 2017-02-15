var today = new Date()
var hourNow = today.getHours()

if (hourNow > 18) {
  var greeting = 'Good evening!'
} else if (hourNow > 12) {
  var greeting = 'Good afternoon!'
} else if (hourNow > 0) {
  var greeting = 'Good morning!'
} else {
  var greeting = 'Welcome!'
}

document.write('<h3 class="greeting">' + greeting + '</h3>')
