var today = new Date()
var currentHour = today.getHours()

if (currentHour > 18) {
  var greeting = 'Good evening!'
} else if (currentHour > 12) {
  var greeting = 'Good afternoon!'
} else if (currentHour > 0) {
  var greeting = 'Good morning!'
} else {
  var greeting = 'Welcome!'
}

document.write('<h3 class="greeting">' + greeting + '</h3>')
