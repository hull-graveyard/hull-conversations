Hull.widget('subjects', {
  templates: ['list'],
  
  subjects: [
    {name: 'facebook', color: '#3B5998'},
    {name: 'twitter', color: '#00A0D1'},
    {name: 'pinterest', color: '#C8232C'},
    {name: 'Prism', color: '#CC181E'}
  ],

  initialize: function(){
    //Makes it so that we only call Hide actions from the second rendering.
    this.sandbox.once('hull.conversations.thread.render',function(){
      this.sandbox.on('hull.conversations.thread.render',this.actions.hide,this);
    },this);
  },

  beforeRender: function(data) {
    data.subjects = this.subjects;
    return data;
  },
  
  actions: {
    toggle:function(e,action){
      $('.page').toggleClass('closed');
    },
    hide:function(e,action){
      $('.page').addClass('closed');
    },
    show:function(e,action){
      $('.page').removeClass('closed');
    },
    select: function(e, action) {
      if(action.data.uid){
        var id = this.sandbox.util.entity.encode(action.data.uid);
      } else {
        var id='';
      }
      // this.actions.hide();
      this.$el.find('.conversations-subject').html(action.data.uid || "All Topics");
      this.sandbox.emit('hull.conversations.select', id);
    }
  }
});
