Thefrontend.Views.results_loop = Backbone.View.extend({

  template: JST['search/results_loop'],
  
  // events: {
  //   'submit #new-job': 'createJob',
  //   'click .remove-job': 'removeJob'
  // },
  
  initialize: function() {
    this.collection.on('reset', this.render, this);
  },
  
  render: function() {
    $(this.el).html(this.template({
      jobs: this.collection.toJSON()
    }));
    return this;
  }

});