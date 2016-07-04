rssClientApp.factory('messageService', ['$compile', function($compile){
	
	var okMessage = 'Ok';
	var errorMessage = 'Error';
	
	
	function buildMessageElement(message, alertType){
		return '<div class="alert ' + alertType + ' alert-dismissible" role="alert">' +
	 	'<button type="button" class="close" data-dismiss="alert" aria-label="Close">' +
	 	'<span aria-hidden="true">&times;</span></button>' + message + '</div>';
	}
	
	function getStandarMessage(objMessage){
		if(objMessage.isCustomMessage){
			return objMessage.message; 
		}
		return 'Ocurrió un problema al cargar la información';
	}
	
	function showMsg(objMessage, messageType){
		var messageElement ="";
		switch(messageType){
			case okMessage:
				messageElement = buildMessageElement(getStandarMessage(objMessage), 'alert-success');
				break;
			case errorMessage:
				messageElement = buildMessageElement(getStandarMessage(objMessage), 'alert-warning');
				break;
			default:
				break;
		}
		var divElement = angular.element(document.querySelector('#messageContainer'));
		var appendHtml = $compile(messageElement)(divElement.scope());
		divElement.html(appendHtml);
	}
	
	return {
		showMessage:function(objMessage, messageType){
			showMsg(objMessage, messageType)
		},
		okMessage:okMessage,
		errorMessage:errorMessage
	}
}]);