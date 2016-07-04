rssClientApp.factory('podcastPlayerService', ['$compile', function($compile){
	var podcastList = [];
	var elementPlaying = null;
	
	function getPodcastPlayingTemplate(podcast){
		return '<div class="col-lg-12"><h3>Estas escuchando...</h3><br/></div><div class="col-lg-12"><h4>' + podcast.title + '</h4><br/></div>' + 
				'<div class="col-lg-12 podcast-desc">' + podcast.description + '<br/><br/></div><div class="col-lg-12 podcast-audio-tag">'+
				'<audio autoplay="true" controls="controls"><source src="' + podcast.url + '" customAudioEvents></source>Tu navegador no soporta el elemento <code>Audio</code>.'+
				'</audio></div>';
	}
	function playPodcast(podcast, listElementPlaying){
		var divElement = angular.element(document.querySelector('#newElementDiv'));
		var appendHtml = $compile(getPodcastPlayingTemplate(podcast))(divElement.scope());
		divElement.html(appendHtml);
		if(elementPlaying !== null){
			elementPlaying.addClass('not-playing');
		}
		elementPlaying = angular.element(listElementPlaying);
		elementPlaying.addClass('playing');
	}
	
	function addPodcastToList(podcastInfo){
		//Asignamos un index a la info del podcast de acuerdo al número de elementos que existan en el arreglo de podcast
		podcastInfo.index = podcastList.length;
		podcastList.push(podcastInfo);
	}
	
	return{
		addPodcast:function(podcastInfo){
			addPodcastToList(podcastInfo);
		}, 
		getPodcastList:function(){
			return podcastList;
		},
		playPodcast:function(podcast, listElementPlaying){
			playPodcast(podcast, listElementPlaying);
		}
		
	}
}]);