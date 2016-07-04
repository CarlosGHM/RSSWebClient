rssClientApp.controller('FeedBackController', ['$scope', 'feedbackService', 'podcastPlayerService', 'messageService', function($scope, feedbackService, podcastPlayerService, messageService){
	$scope.podcastList=[];
	$scope.requestOnProcess = false;
	
	$scope.getPodcastFeedback = function(){
		$scope.requestOnProcess = true;
		feedbackService.getFeedback($scope.feedbackUrl)
		.then(function(response){
			podcastPlayerService.addPodcast(feedbackService.getPodcastInfo(response));
			$scope.podcastList = podcastPlayerService.getPodcastList();
			messageService.showMessage({message:'Podcast agregado correctamete', isCustomMessage:true}, messageService.okMessage);
		})
		.catch(function(response){
			feedbackService.removePodcastUrl($scope.feedbackUrl);
			messageService.showMessage(response, messageService.errorMessage);
		})
		.finally(function(){
			$scope.feedbackUrl = '';
			$scope.requestOnProcess = false;
		});
	}
	
	$scope.playPodcast = function(podcast, $event){
		podcastPlayerService.playPodcast(podcast, $event.currentTarget);
	}
}]);