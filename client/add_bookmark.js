Template.body.events({
	"submit .new-bookmark": function(event){
		//Prevent default browser form submit
		event.preventDefault();

		//Get value from form elements - prepend with b to avoid keywords
		var btitle = event.target.urltitle.value;
		var burl = event.target.url.value;
		var bdescription = event.target.urldescription.value;
		var bcategory = event.target.urlcategory.value;

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

		//Validate that URL is unique - no duplicate bookmarks
		var isUnique = Meteor.call("isUniquebookmark", burl);

		if ( isUnique !== undefined) {
			alert( "Someone has already added this bookmark!" );
			return false;
		}

		if (bcategory == "") {
			bcategory = "General";
		}

		//console.log(Meteor.userId());

		Meteor.call("addBookmark", btitle, burl, bdescription, bcategory);

		//Clear form
		event.target.urltitle.value = "";
		event.target.url.value = "";
		event.target.urldescription.value = "";
		event.target.urlcategory.value = "";
	}
});

Template.body.helpers({
	bookmarks: function() {
		return Bookmarks.find({}, {sort: {createdAt: 1}, limit: 5});
	}
});

Template.bookmark.events({
	"click .delete": function(event) {
		Meteor.call("deleteBookmark", this._id);
	},

	"click .edit": function(event) {
		Meteor.call("deleteBookmark", this._id);
	}
});
