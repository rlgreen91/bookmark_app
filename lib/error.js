throwError = function(error, reason, details) {
	var meteorError = new Meteor.Error(error, reason, details);

	if (Meteor.isClient) {
		//this error is never used, return values from method stubs are ignored
		return meteorError;
	} else if (Meteor.isServer) {
		throw meteorError;
	}
};