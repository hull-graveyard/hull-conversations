Hull.widget('conversation_form', {
  templates: ['form'],

  refreshEvents: ['model.hull.me.change'],

  initialize: function() {
    this.sandbox.on('hull.conversation.reset_form', function(id) {
      this.options.id = id;
      this.render();
    }, this);
  },

  actions: {
    create: function(e, action) {
      e.preventDefault();
      var self = this,
          $form = this.$el.find('form'),
          formData = this.sandbox.dom.getFormData($form),
          url = (this.options.id || 'app') + "/conversations";
      formData.public = formData.public || true;
      this.api(url, 'post', formData).then(function(convo) {
        self.conversationId = convo.id;
        setTimeout(function() {
          self.sandbox.emit('hull.conversation.select', convo.id);
          self.sandbox.emit('hull.conversation.reload', self.options.id);
        }, 200);
        self.render();
      });
    }
  }
});
