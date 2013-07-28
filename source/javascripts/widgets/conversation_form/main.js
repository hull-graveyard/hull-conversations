Hull.widget('conversation_form', {
  templates: ['form'],

  refreshEvents: ['model.hull.me.change'],

  initialize: function() {
    this.sandbox.on('hull.conversations.reload', function(id) {
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
          self.sandbox.emit('hull.conversations.reload', self.options.id);
          self.sandbox.emit('hull.conversation.select', convo.id);
        }, 200);
        self.render();
      });
    }
  }
});
