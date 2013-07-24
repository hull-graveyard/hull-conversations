Hull.widget('subjects', {
  templates: ['list'],
  
  subjects: [
    {name: 'facebook', color: '#3B5998'},
    {name: 'twitter', color: '#00A0D1'},
    {name: 'pinterest', color: '#C8232C'},
    {name: 'Prism', color: '#CC181E'}
  ],

  beforeRender: function(data) {
    data.subjects = this.subjects;
    return data;
  },
  
  actions: {
    select: function(e, action) {
      if(action.data.uid){
        var id = this.sandbox.util.entity.encode(action.data.uid);
      } else {
        var id='';
      }
      this.$el.find('.conversations-subject').html(action.data.uid || "All Topics");
      this.sandbox.emit('hull.conversation.reload', id);
      this.sandbox.emit('hull.conversation.reset_form', id);
    }
  }
});
