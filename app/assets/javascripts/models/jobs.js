Thefrontend.Models.Jobs = Backbone.Model.extend({

	idAttribute: '_id',

  // Make sure that the correct fields are initialised to arrays
  defaults: function () {
    return {
      'tags': []
    };
  }
});