var urlTargets = [
	'https://www.moretonbay.qld.gov.au/maps-disaster.aspx',
	'http://www.bom.gov.au/products/IDR503.loop.shtml#skip',
	];

var loops = 2;
var secondsPerTab = 10;
var mSecondsPerTab = secondsPerTab * 1000;
var win = [];

// FUNCTIONS
//-------------------------------------------


//MAIN PROGRAM
//-------------------------------------------
var output = '<ul>';
	$.each(urlTargets, function (key,val) {
		output += '<li>' + val + '</li>';
	});
output += '</ul>';
$('#update').html(output); //Display URL Targets in list


//Tab opener-closer
for (var i = 0; i < urlTargets.length; i++) {
    	setTimeout(function(x) { return function() { 
		win[x] = window.open(urlTargets[x]);
		}; }(i), mSecondsPerTab*(i));	// Open tabs
		
    	setTimeout(function(x) { return function() { 
		win[x].close();
		}; }(i), mSecondsPerTab*(i+1));	// Close tabs
}
