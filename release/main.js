var projectName = 'kittenbook';
var versionNumber = '0.0.1';
var currentDate = new Date();

// ex) '2014-01-25 at 14:45:12'
var currentTime = currentDate.getFullYear() + '-' + // year
		(currentDate.getMonth() + 1) + '-' + // month
		currentDate.getDate() + ' at ' + // date
		currentDate.getHours() + ':' + // hour
		currentDate.getMinutes() + ':' + // minute
		currentDate.getSeconds(); // second

var userName = prompt('Hello, what\'s your name??');
document.body.innerHTML = '<h1>Hello, ' + userName + '!</h1>' + 
		'<p>' + kbValues.projectName + ' ' + 
		kbValues.versionNumber + 
		' viewed on: ' + kbValues.currentTime + '</p>';

var images = document.querySelectorAll('li.tl_default img');
