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
    var newWin = window.open(url);
	return newWin;
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
	win[i] = window.open(urlTargets[i],'tab' + i);
	
}// Open tabs


for (var i = 0; i < urlTargets.length; i++) {
    setTimeout(function(x) { return function() { 
		console.log('Refocus ' +x + ': ' + urlTargets[x]);
		win[x].close();
		}; }(i), 10000*(i+1));	// Open tabs
}
