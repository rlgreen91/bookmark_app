Meteor.methods({
	//add a bookmark to the collection
	addBookmark: function (urltitle, url, urldescription, urlcategory) {
		Bookmarks.insert({
			url_title: urltitle,
			url: url,
			url_description: urldescription,
			url_category: urlcategory,
			createdAt: new Date()
		});
	},

	deleteBookmark: function (bookmarkId) {
		Bookmarks.remove(bookmarkId);
	},

	isUniquebookmark: function(url) {
		var old_bookmark = Bookmarks.findOne({url: url});
		return old_bookmark
	}
});