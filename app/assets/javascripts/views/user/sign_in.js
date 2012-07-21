Thefrontend.Views.sign_in = Backbone.View.extend({

  template: JST['user/sign_in'],
  
  // events: {
  //   'submit #new-job': 'createJob',
  //   'click .remove-job': 'removeJob'
  // },
  
  initialize: function() {
    //this.collection.on('reset', this.render, this);
  },
  
  render: function() {
    $(this.el).html(this.template());
    return this;
  }

});