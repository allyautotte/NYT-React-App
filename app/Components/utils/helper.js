var axios = require("axios");
var key = "a8f898183d584bbebd1a771e82dc4ef3";
var helpers = {

	runQuery: function(searchTerm,startDate,endDate){

		console.log(searchTerm);
		console.log(startDate);
		console.log(endDate);

		var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + key + "&q=" + searchTerm + "&begin_date=" + startDate + "&end_date=" + endDate;


		return axios.get(queryURL)
			.then(function(response){

				console.log(response);
				//parse through response object, add to object
				var sendThisData =[];
				for(var i=0;i<response.data.response.docs.length;i++){
					//sendThisData+= [response.data.response.docs[i].headline.main + response.data.response.docs[i].web_url];
					var buildMeAnObject = {
						title:response.data.response.docs[i].headline.main,
						url:response.data.response.docs[i].web_url
					};
					sendThisData.push(buildMeAnObject);
				}
				console.log(sendThisData.length);
				return sendThisData;
		})

	}

}


// We export the helpers function
module.exports = helpers;