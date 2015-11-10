Meteor.methods({
	//add a bookmark to the collection
	addBookmark: function (urltitle, url, urldescription) {
		Bookmarks.insert({
			url_title: urltitle,
			url: url,
			url_description: urldescription,
			createdAt: new Date()
		});
	}
});