var app = app || {};

app.HotelModel = Backbone.Model.extend({
	defaults: {
		coverImage :'',
		hotelName :'',
		hotelAddress : '',
		hotelClass: ''
	}
});
  
 