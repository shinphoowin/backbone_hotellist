var app = app || {};

app.StudentModel = Backbone.Model.extend({
	defaults : {
		coverImage :'',
		stuname :'',
		stuemail : '',
		stumajor: ''
	}	 
});
 
 