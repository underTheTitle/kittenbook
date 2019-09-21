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
