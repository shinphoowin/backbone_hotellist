var app = app || {};

app.IndividualStudentView = Backbone.View.extend({	
	className: 'grid-item',
	itemTemplate : _.template($("#item-template").html()),
	events: {
		'click .editInsertedbtn' : 'editData',
		'click .updateEditbtn': 'updateData',
		'click .deleteInsertedbtn' : 'deleteRecord',
		'change .updatestuimg' : 'updateImg'
	},
	initialize: function(){

		this.$updatestuimg = this.$(".updatestuimg");
		this.$newpreviewimg = this.$(".newpreviewimg");
		 
		//var counter = this.model.cid
		this.listenTo(this.model,'change',this.render);
		// $('.grid').masonry({
	 //      // options
	 //      itemSelector: this.$griditem,
	 //      columnWidth: 320
	 //    });
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
		var stuname = this.$("#name").val();
		var stuemail = this.$("#email").val();
		var stumajor = this.$("#major").val();

		// console.log(coverimage || stuname + ": "+ stuemail + ":" + stumajor);

		if(coverimage || stuemail || stumajor || stuname){
			this.model.save({
				coverImage :coverimage,
				stuname : stuname,
				stuemail : stuemail,
				stumajor : stumajor
			});
		}
		this.$el.removeClass('editing');

	},
	deleteRecord:function(){
		this.model.destroy();
		this.$el.remove();
	},
	updateImg: function(element){
		console.log('updateImg hit'); 
		 // console.log(element.currentTarget); 

		 		// for(var i=0;i<app.studentcollection.length;i++){
			 		 
				 		// if(element.currentTarget.files && element.currentTarget.files[0]){			 	 
						 // 	var reader = new FileReader();
						 // 	reader.onload = function(){			 		
						 // 		// $(".newpreviewimg").attr('src',reader.result);
						 // 		// $(element.currentTarget.files[0]).next('img').attr('src',reader.result);
						 // 		console.log((element.currentTarget.files[0]));
						 // 	}							 	 	
					 	// }
					 	// reader.readAsDataURL(element.currentTarget.files[0]);
				// }

				// if(app.studentcollection){
		 	// 	for(app.counter=0;app.counter<app.studentcollection.length;app.counter++){
			 		// console.log("i am inside");
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
		// this.setFromFile();
		// console.log(this.el);//<div class='studentcard editing'></div>
		// console.log(this.model);//n {cid: "c4", attributes: Object, collection: n, _changing: false, _previousAttributes: Object…}
		// console.log(event.target.files[0]);//File {name: "business-q-c-640-480-6.jpg", lastModified: 1472779986000, lastModifiedDate: Thu Sep 01 2016 18:33:06 GMT-0700 (Pacific Daylight Time), webkitRelativePath: "", size: 44519…}
	
});
// new app.IndividualStudentView().setFromFile();
 