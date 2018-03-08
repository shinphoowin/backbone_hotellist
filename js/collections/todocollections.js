var todoapp = todoapp || {};

var TodoCollection = Backbone.Collection.extend({
	model: todoapp.TodoModel,
	localStorage: new Backbone.LocalStorage('todos-backbone')
})

todoapp.runtodocollection = new TodoCollection();
console.log(todoapp.runtodocollection.length);