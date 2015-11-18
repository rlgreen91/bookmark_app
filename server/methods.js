Meteor.methods({
	addBookmark: function (urltitle, url, urldescription, urlcategory) {
		//Before inserting, check to see if the bookmark has previously been added.  If so, return error.
		var isUnique = Meteor.call("isUniquebookmark", url);

		if ( isUnique !== undefined ) {
			return throwError("duplicate-bookmark","This bookmark has already been added.")
		}

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