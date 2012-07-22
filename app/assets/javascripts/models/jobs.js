Thefrontend.Models.Jobs = Backbone.Model.extend({

	idAttribute: '_id',

  // Make sure that the correct fields are initialsed to arrays
  defaults: function () {
    return {
      'keywords': [],
      'tags': []
    };
  }
});