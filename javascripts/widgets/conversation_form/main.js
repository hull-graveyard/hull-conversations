Hull.widget("conversation_form",{templates:["form"],refreshEvents:["model.hull.me.change"],initialize:function(){this.sandbox.on("hull.conversations.reload",function(e){this.options.id=e,this.render()},this)},actions:{create:function(e,t){e.preventDefault();var n=this,r=this.$el.find("form"),i=this.sandbox.dom.getFormData(r),s=(this.options.id||"app")+"/conversations";i.public=i.public||!0,this.api(s,"post",i).then(function(e){n.conversationId=e.id,setTimeout(function(){n.sandbox.emit("hull.conversations.reload",n.options.id),n.sandbox.emit("hull.conversation.select",e.id)},200),n.render()})}}});