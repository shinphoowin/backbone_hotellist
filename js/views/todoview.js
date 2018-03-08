var todoapp = todoapp || {};
todoapp.TodoView = Backbone.View.extend({
	el: '#todoapp',
	// statsTemplate : _.template($("#stats-template").html()),
	events: {
		'keypress #new-todo': 'createOnEnter',
		'click .delete_icon': 'deleteItem'
	},
	initialize: function(){
		this.input = this.$("#new-todo");
		
		this.listenTo(todoapp.runtodocollection,'add',this.addOne);	 
		this.listenTo(todoapp.runtodocollection, 'all', this.render);
	},
	addOne: function(modeldata){
		console.log("addOne fun hit");
		var todoitems = new todoapp.TodoItems({model: modeldata}); 
		this.$("#todo-list").append(todoitems.renderview().el); 
	},
	newAttr: function(){
		console.log('newAttr fun hit')
		return {
			title: this.input.val().trim()
		}
	},
	createOnEnter: function(e){
		console.log("createOnEnter fun hit")

		if(e.which !== 13 || !this.input.val().trim()){
			return;
		}
		todoapp.runtodocollection.create(this.newAttr());
		this.input.val('');
	}

})

console.log(todoapp.runtodocollection.length);
console.log(todoapp.runtodocollection);