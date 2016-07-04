rssClientApp.factory('feedbackService', ['$q', '$http', function($q, $http){
	var registeredPodcast = new Set();
	
	function geturl(inputUrl){
		var urlApi = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20xml%20where%20url%3D'" + encodeURIComponent(inputUrl) + "'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=JSON_CALLBACK";
		return urlApi;
	}
	
	function getResponseObject(response){
		return response.data.query.results.rss.channel;
	}
	
	function parsePodcastObject(podcastRawObject){
		var elements = [];
		podcastRawObject.item.forEach(function(e, index){
			var o = {
					url:(e.enclosure !== undefined && e.enclosure.url !== undefined) ? e.enclosure.url : '',
					type:(e.enclosure.type !== undefined) ? e.enclosure.type : 'Sin tipo',
					title:(e.title !== undefined) ? e.title : 'Sin titulo',
					description:(e.description !== undefined) ? e.description : 'Sin descripción',
					pubDate:(e.pubDate !== undefined) ? e.pubDate : 'Sin fecha de publicación'
			};
			if(o.url !== ''){
				elements.push(o);
			}
		});
		return {
			index:0,
			title:(podcastRawObject.title !== undefined) ? podcastRawObject.title : 'Sin titulo',
			author:(podcastRawObject.author !== undefined) ? podcastRawObject.author : 'Autor desconocido',
			chapters:elements
		}
	}
	
	function getFeedback(inputUrl){
		if(!registeredPodcast.has(inputUrl)){
			registeredPodcast.add(inputUrl);
			return $http.jsonp(geturl(inputUrl));
		}else{
			var deferred = $q.defer();
			deferred.reject({message:"El podcast ya está registrado", isCustomMessage:true});
			return deferred.promise;
		}
	}
	
	function getPodcastInfo(response){
		return parsePodcastObject(getResponseObject(response));
	}
	
	function removePodcastUrl(inputUrl){
		registeredPodcast.delete(inputUrl);
	}
	
	return{
		getFeedback:function(inputUrl){
			return getFeedback(inputUrl);
		}, 
		getPodcastInfo:function(response){
			return getPodcastInfo(response);
		},
		removePodcastUrl:function(inputUrl){
			removePodcastUrl(inputUrl);
		}
	}
}]);