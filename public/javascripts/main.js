/////////////////////////////
////    client side     ////
///////////////////////////

/*
	Document on load functions. 
	-- Hide Scrape information initially
	-- Pass user input URL field value to route (route/scrape.js)
	-- Parse data to display markup and tag information, on success. 
*/
$(function(){
	$('.content-container').hide(); //dont show on load
	$('#submit').on( 'click', function (e) {
		e.preventDefault(); // we don't need to submit the form
		var sSearch = $('#url-to-fetch').val(); //pass URL value to route to process request
		sSearch = encodeURIComponent(sSearch);
		var ajaxCall = $.ajax({
	        url: '/',
	        type: 'POST',
	        dataType: "html",
	        data: {'url':sSearch }
	    });
	    $.when(ajaxCall) // parse data for diaplay only on success
		 .then(function(data) { 
		 	$('.content-container').show();
		 	$('#parsed-result').text(data);
		 	parseData(data);
		});
	});
});

/*
	Parse Data recieved by the request module on success method.
*/
var parseData = function(data) {
	var domNode = $('<body>').html(data)[0], //create a dummy dom node to hold markup
		domArray = domNode.getElementsByTagName("*"), //from the markup get every element by its tag name
		max = domArray.length,
		aSortedTagNames = [];
	
	for (var i=0; i < max; i++) {
		// Create an array with all tag names fetched in chronoligical order. O(n)
	    aSortedTagNames.push(domArray[i].tagName.toLowerCase());
	    aSortedTagNames.sort();
	}

	// Construct object with keys as tagname and value as its count
	tagInfo = unique(aSortedTagNames); 

	$.each(tagInfo, function(index, value) {
	    tr = $('<tr/>');
	    tr.append("<td class='tag-name'>" + index + "</td>");
	    tr.append("<td class='tag-count'>" + value + "</td>");
	    $('table.tag-info-table').append(tr);
	}); 
}


/*
	Create a map-object to hold tags by their name and count, eg {a:5, i:2, div:9} with key being the tag, and count its value.
*/
var unique = function(aSortedTagNames) {
	var tagInfo = {};
    
    for(var i = 0; i < aSortedTagNames.length; i++) {
	    tag = aSortedTagNames[i];

	    // If a tagname exists, increase count by 1, or else add it with a count of 1.
	    if (tag !== undefined){
			if (tag in tagInfo) {
				tagInfo[tag]++;
			} else {
				tagInfo[tag] = 1;
			}
	    } 
  
	}
	return tagInfo;
}

