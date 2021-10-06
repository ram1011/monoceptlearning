var Vehicle = Backbone.Model.extend({
	idAttribute: "registrationNumber",

	urlRoot: "/api/vehicles",
	validate: function (attrs) {
		if (!attrs.registrationNumber)
			return "Vehicle is not valid.";
	},
	start: function () {
		console.log('vehicle started');
	}
});

var Car = Vehicle.extend({
	start: function () {
		console.log('Car started');
	}
});
var skoda = new Car({
	"registrationNumber": "sdsdfsd",
	"color": "blue"
})

skoda.unset("registrationNumber");

var isvalid = skoda.isValid();
console.log(isvalid);

if (isvalid == false) {
	console.log(skoda.validationError);
} 
	skoda.set("registrationNumber", "sds22");
	console.log(skoda.toJSON());
	skoda.start();