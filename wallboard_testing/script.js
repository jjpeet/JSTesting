var urlTargets = [
	'https://www.moretonbay.qld.gov.au/maps-disaster.aspx',
	'http://www.bom.gov.au/products/IDR503.loop.shtml#skip',
	];

var loops = 1;
var secondsPerTab = 10;
var tabName = [];
var win = [];

// FUNCTIONS
//-------------------------------------------
function openInNewTab(url) {
    newWin = window.open(url);
	return openWin;
}// openInNewTab Function

function closeTab(closeWin){
	closeWin.close();
}

function setDelay(i) {
  setTimeout(function(){
    console.log(i);
  }, 5000);
}

//MAIN PROGRAM
//-------------------------------------------
for (var i = 0; i < urlTargets.length; i++) {
		window.open(urlTargets[i],'tab' + i);
}// Open tabs


/*for (var i = 0; i < urlTargets.length; i++) {
    setTimeout(function(x) { return function() { 
		console.log('Open ' + x + ': ' + urlTargets[x]);
		win[x] = window.open(urlTargets[x],'tab' + x);
		}; }(i), 10000*i);	// Open tabs
}*/

for (var i = 0; i < urlTargets.length; i++) {
    setTimeout(function(x) { return function() { 
		console.log('Refocus ' +x + ': ' + urlTargets[x]);
		windows.blur();
		win[x].close();
		}; }(i), 10000*i);	// Open tabs
}
