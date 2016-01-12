
var data = {
    resource_id: 'e68ac533-e840-4ec0-a0d7-2943b0462c9b', // the resource id
    limit: 5, // get 5 results
    q: 'jones' // query for 'jones'
  };
  $.ajax({
    url: 'https://data.qld.gov.au/api/action/datastore_search',
    data: data,
    dataType: 'jsonp',
    success: function(data) {
      alert('Total results found: ' + data.result.total);
    }
  });
  