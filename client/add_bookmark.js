Template.body.events({
	"submit .new-bookmark": function(event){
		//Prevent default browser form submit
		event.preventDefault();

		//Get value from form elements - prepend with b to avoid keywords
		var btitle = event.target.urltitle.value;
		var burl = event.target.url.value;
		var bdescription = event.target.urldescription.value;

		if (btitle == "") {
			alert( "You must list a title" );
			return false;
		}

		if (burl == "") {
			alert( "You must include the URL" );
			return false;
		}

		
	}
});