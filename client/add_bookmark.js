Template.body.events({
	"submit .new-bookmark": function(event){
		//Prevent default browser form submit
		event.preventDefault();

		//Get value from form elements - prepend with b to avoid keywords
		var btitle = event.target.urltitle.value;
		var burl = event.target.url.value;
		var bdescription = event.target.urldescription.value;

		//Validate that title is entered
		if (btitle == "") {
			alert( "You must list a title" );
			return false;
		}

		//Validate that URL is entered
		if (burl == "") {
			alert( "You must include the URL" );
			return false;
		}

		Meteor.call("addBookmark", btitle, burl, bdescription);

		//Clear form
		event.target.urltitle.value = "";
		event.target.url.value = "";
		event.target.urldescription.value = "";
	}
});

Template.body.helpers({
	bookmarks: function() {
		return Bookmarks.find({}, {sort: {createdAt: 1}, limit: 1});
	}
});