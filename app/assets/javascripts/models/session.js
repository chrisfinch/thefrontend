/*
 * Provides a simple interface to access the user stored in the session 
 * on the server.
 */
Thefrontend.Models.Session = Backbone.Model.extend({

  defaults: {
    username: '',
    id: '_empty'
  },

  // Custom CRUD routes
  methods: {
    'create': '/login',
    'read': '', // There is no read route for the session user at the moment
    'update': '/login',
    'delete': '/logout'
  },

  // Override Backbone.sync to use custom routes
  sync: function(method, model, options) {
    options = options || {};
    options.url = model.methods[method.toLowerCase()];

    Backbone.sync(method, model, options);
  }

});