var app = app || {};

var HotelCollection = Backbone.Collection.extend({
	model : app.HotelModel,
	localStorage: new Backbone.LocalStorage('hotellist-backbone')
});

app.hotelcollection = new HotelCollection();
 