var app = app || {};

app.StudentsView = Backbone.View.extend({
	el: "#stuwrapper",
	stucountTemplate : _.template($("#totalstudent-template").html()),
	events: {
		'click button' : 'createOnEnter',
		'change #stuimg' : 'uploadImg',
	},
	addstudentforUI: function(studentdata){		
		var individualstuview = new app.IndividualStudentView({model:studentdata});
		this.$stickerpaper.append(individualstuview.render().el);		
	},
	initialize: function(){
		console.log("studendsview init hit")
		// this.$coverimage = this.$("#stuimg");
		this.$name = this.$("#name");
		this.$email = this.$("#email");
		this.$major = this.$("#major");
		this.$stucountwrapper = this.$("#stucountwrapper");
		this.$stickerpaper = this.$("#stickerpaper");
		this.$previewimg = this.$("#previewimg");
		this.$grid = this.$(".grid");

		this.listenTo(app.studentcollection,'add',this.addstudentforUI);

		this.listenTo(app.studentcollection,'all',this.render);
		
		app.studentcollection.fetch();		      
	},
	render: function(){	
		// console.log("render hit at appview");		
		if(app.studentcollection.length){
			this.$stickerpaper.show();		
			this.$stucountwrapper.html(this.stucountTemplate({studentcount : app.studentcollection.length}));
			
		}else{
			this.$stickerpaper.hide();
			this.$stucountwrapper.html(this.stucountTemplate({studentcount : 0}));
		}		
	},
	newAttributes: function(){
		console.log("newAttributes hit");
		//pick input value and return as obj
		return {
			// coverImage : this.$previewimg.attr('src'),
			coverImage : this.$("#previewimg").attr('src'),
			stuname : this.$name.val().trim(),
			stuemail :this.$email.val().trim(),
			stumajor: this.$major.val().trim(),
 
		 }		
	},
	createOnEnter: function(){
		console.log("createOnEnter hit");
		if(!this.$name.val().trim() || !this.$email.val().trim() || !this.$major.val().trim()){
			return;
		}
		console.log(this.newAttributes())
		app.studentcollection.create(this.newAttributes());

		
		this.$name.val('');
		this.$email.val('');
		this.$major.val('');
	},
	uploadImg: function(){
		console.log("uploadImg hit");
		// var imgtag = document.querySelector('img');
			  var file = document.querySelector('input[type=file]').files[0];
			  console.log(file)
			  var reader = new FileReader();
			  console.log(reader)
			  reader.onload = function() {		
			    console.log('reach here') ; 
			    $("#previewimg").attr('src',reader.result)
			   // return reader.result;
			  }
			  reader.readAsDataURL(file);
			}
		
	
});
 