(function ($) {
  
  // Authorisation utilities
  var auth = (function () {

    var pub = {};

    // Create an empty user to start off with
    pub.init = function () {
      Thefrontend.user = new Thefrontend.Models.Session();
    };

    // Attempt a login
    pub.login = function (username, password) {

      // See if we can load a user with the given credentials
      Thefrontend.user.save({
        username: username,
        password: password  
      }, {
        success: function () {
          console.log('Logged in successfully as: ', Thefrontend.user.get('username'));
        },
        error: function () {
          console.log('failed to log in');
          Thefrontend.user.clear();
        }
      });
    };

    // Logout the current user
    pub.logout = function () {
      Thefrontend.user.clear();
    };

    return pub;

  }());

  window.Thefrontend = window.Thefrontend || {};
  window.Thefrontend.auth = auth;

}(jQuery));