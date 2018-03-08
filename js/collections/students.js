var app = app || {};

var StudentCollection = Backbone.Collection.extend({
	model : app.StudentModel,
	localStorage: new Backbone.LocalStorage('todos-backbone')
});

app.studentcollection = new StudentCollection();
// console.log(app.donatorcollection);