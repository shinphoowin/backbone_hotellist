var app = app || {};

app.IndividualHotelView = Backbone.View.extend({	
	
	itemTemplate : _.template($("#item-template").html()),
	events: {
		'click #editbtn' : 'editData',
		'click #updatebtn': 'updateData',
		'click #delbtn' : 'deleteRecord',
		'change .updatehotelimg' : 'updateImg'
	},
	initialize: function(){
		this.listenTo(this.model,'change',this.render);
	},
	render: function(){	
		console.log("render hit at appview");

		this.$el.html(this.itemTemplate(this.model.attributes));
		return this;
	},
	editData: function(){
		console.log("editing hit");		
		this.$el.addClass('editing')
	},
	updateData: function(){
		console.log('hit updateData');
		var coverimage = this.$(".newpreviewimg"+ this.model.cid).attr('src');
		var hotelname = this.$("#hname").val();
		var hoteladdress = this.$("#hadd").val();
		var hotelclass = this.$("#hclass").val();

		// console.log(coverimage || stuname + ": "+ stuemail + ":" + stumajor);
		if(coverimage || stuemail || stumajor || stuname){
			this.model.save({
				coverImage :coverimage,
				hotelName : hotelname,
				hotelAddress : hoteladdress,
				hotelClass : hotelclass
			});
		}
		this.$el.removeClass('editing');

	},
	deleteRecord:function(){
		console.log('deleteRecord hit');
		this.model.destroy();
		this.$el.remove();
	},
	updateImg: function(element){
		console.log('updateImg hit'); 
			 					 console.log(this.model.cid)
			 					 var counter = this.model.cid;
				 		if(element.currentTarget.files && element.currentTarget.files[0]){			 	 
						 	var reader = new FileReader();
						 	reader.onload = function(e){			 		
						 		//$(".newpreviewimg"+this.model.cid).attr('src',reader.result);
						 
						 		console.log($(".newpreviewimg"+counter));
						 		$(".newpreviewimg"+counter).attr('src',reader.result);
						 		return counter;
						 	}						
					 	}
					 	reader.readAsDataURL(element.currentTarget.files[0]);	 	
		 	
		 } 
	
}); 