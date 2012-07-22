Thefrontend.Views.sign_in = Backbone.View.extend({

  template: JST['user/sign_in'],
  
  events: {
    'click .signInButton': 'signIn',
    'focus #username': 'fieldsUsername',
    'focus #password': 'fieldsPassword',
    'blur #username': 'fieldsUsername',
    'blur #password': 'fieldsPassword',
    'keydown #username': 'submit',
    'keydown #password': 'submit',
    'click #submit': 'submit'
  },
  
  initialize: function() {
    //this.collection.on('reset', this.render, this);
    var _this = this;
  },
  
  signIn: function (event) {
    event.preventDefault();
    this.$el.find('#signInForm')
    .removeClass('hidden')
    .find('#username')
    .focus()
    .val(
      this.$el.find('#username').val()
    );
  },

  submit: function (event) {
    if ((event.type == 'keydown' && event.keyCode == 13) ||
      event.type == 'click') {
      //event.preventDefault();
      // log in here..
      //this.user = this.$el.find('#username').val();
      //this.pass = this.$el.find('#password').val();      
      //console.log('trying to sign in with: ', this.user, ' and ', this.pass);
    }
  },

  reset: function (event) {
    event.preventDefault();
    this.$el.find('#signInForm').addClass('hidden');
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
        if ($e.val() === '') {
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
        if ($e.val() === '') {
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