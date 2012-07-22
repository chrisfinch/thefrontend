Thefrontend.Views.sign_in = Backbone.View.extend({

  template: JST['user/sign_in'],
  
  events: {
    'click .signInButton': 'signIn',
    'focus #username': 'fieldsUsername',
    'focus #password': 'fieldsPassword',
    'blur #username': 'fieldsUsername',
    'blur #password': 'fieldsPassword',    
  },
  
  initialize: function() {
    //this.collection.on('reset', this.render, this);
  },
  
  signIn: function () {
    this.$el.find('#signInForm')
    .show()
    .find('#username')
    .focus()
    .val(
      this.$el.find('#username').val()
    );
  },

  fieldsUsername: function (event) {
    var $e = $(event.target);
    switch (event.type) {
      case 'focusin':
        if ($e.val() == $e.data('val')) {
          $e.val('');
        }
        break;
      case 'focusout':
        if ($e.val() == '') {
          $e.val($e.data('val'));
        }
        break;
    }      
  },

  fieldsPassword: function (event) {
    var $e = $(event.target);
    switch (event.type) {
      case 'focusin':
        if ($e.val() == $e.data('val')) {        
          $e.val('')[0].type = 'password';
        }
        break;
      case 'focusout':
        if ($e.val() == '') {
          $e.val($e.data('val'))[0].type = 'text';
        }
        break;
    }      
  },  

  render: function() {
    $(this.el).html(this.template());
    return this;
  }

});