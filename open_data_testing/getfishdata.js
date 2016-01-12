var info;
var request;

/*if (window.XMLHttpRequest) {
	request=new XMLHttpRequest();
} else {
	request=new ActiveXObject("Microsoft.XMLHTTP");
}
*/
var dataFeed = 'http://bie.ala.org.au/ws/species/urn:lsid:biodiversity.org.au:afd.taxon:da49ac2f-ba54-4d88-bfdf-d6326b301904.json';

request.open('GET', dataFeed);
request.onreadystatechange = function() {
	if ((request.status === 200) &&
		(request.readyState === 4)) {

			info = JSON.parse(request.responseText);

/*			var output='';
			for (var i = 0; i <= info.images.length-1; i++) {
				for (key in info.images[i]) {
					if (info.links[i].hasOwnProperty(key)) {
						output += '<li>' + 
						'<a href = "' + info.images[i][key] +
						'">' + key + '</a>';
						'</li>';
			    	}   
				}
			}

			var update = document.getElementById('links');
			update.innerHTML = output;
*/			

			
	} //ready
} //event

			var debugOutput = '';
			debugOutput = info.taxonName.guid;
			//debugOutput = request.responseText;
			var update = document.getElementById("debugData");
			update.innerHTML = debugOutput;
			console.log(debugOutput)
			console.log(request.responseText)

request.send();
