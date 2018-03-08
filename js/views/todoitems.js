var todoapp = todoapp || {};

todoapp.TodoItems = Backbone.View.extend({
	tagName: 'li',
	itemsTemplate: _.template($("#item-template").html()),
  events: {
    'click .delete_icon': 'deleteItem'
   },
    initialize: function(){
   		console.log(this);//check methods inside super of constructor of prototype
   		this.listenTo(this.model,'change',this.render);//this is method of constructor of main view , very important
      this.listenTo(this.model,'destroy',this.remove);//this is method of constructor of main view ,very importat
    },
    renderview: function(){
    	this.$el.html(this.itemsTemplate(this.model.attributes));
    	return this;
    },
    deleteItem: function(){
      console.log("deleteItem fun hit");
      this.model.destroy();
    }
});

