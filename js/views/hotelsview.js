var app = app || {};

app.HotelsView = Backbone.View.extend({
	el: "#hotelviewsWrapper",
	hotellistcountTemplate : _.template($("#hotelcounter-template").html()),
	events: {
		'click .readmore' : 'createOnEnter',
		'change #hotelimg' : 'uploadImg',
	},
	initialize: function(){
		this.$hotelname = this.$("#hotelname");
		this.$hoteladdress = this.$("#hoteladdress");
		this.$hotelclass = this.$("#hotelclass");

		this.$hotelcountWrapper = this.$("#hotelcountWrapper");
		this.$hotellistWrapper = this.$("#hotellistWrapper"); 

		this.listenTo(app.hotelcollection,'add',this.addhotelforUI);
		this.listenTo(app.hotelcollection,'all',this.render);
		app.hotelcollection.fetch();
	},
	render: function(){	
		console.log("render hit at appview");
		if(app.hotelcollection.length){		
			this.$hotelcountWrapper.html(this.hotellistcountTemplate({hotellistcount : app.hotelcollection.length}))
		}else{
			this.$hotelcountWrapper.html(this.hotellistcountTemplate({hotellistcount :0}));
		}		
	},
	addhotelforUI: function(hoteldata){	
	console.log("addhotelforUI hit")	
		var individualhotelview = new app.IndividualHotelView({model:hoteldata});
		this.$hotellistWrapper.append(individualhotelview.render().el);
	},
	newAttributes: function(){
		// console.log("newAttributes hit");
		// //pick input value and return as obj
		return {
			coverImage : this.$("#previewimg").attr('src'),
			hotelName : this.$hotelname.val().trim(),
			hotelAddress :this.$hoteladdress.val().trim(),
			hotelClass: this.$hotelclass.val().trim(),
		 }		
	},
	createOnEnter: function(){
		console.log("createOnEnter hit");

		if(!this.$hotelname.val().trim() || !this.$hoteladdress.val().trim() || !this.$hotelclass.val().trim()){
			return;
		}
		console.log(this.newAttributes())
		app.hotelcollection.create(this.newAttributes());
		
		this.$hotelname.val('');
		this.$hoteladdress.val('');
		this.$hotelclass.val('');
	},
	uploadImg: function(){
		console.log("uploadImg hit");
		// var imgtag = document.querySelector('img');
			  var file = document.querySelector('input[type=file]').files[0];
			  console.log(file)
			  var reader = new FileReader();
			  console.log(reader)
			  reader.onload= function() {		
			    console.log('reach here') ; 
			    $("#previewimg").attr('src',reader.result)
			   // return reader.result;
			  }
			  reader.readAsDataURL(file);
			}	
});
 