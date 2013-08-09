Hull.require(["handlebars"],function(e){return window.Hull.templates||(window.Hull.templates={}),window.Hull.templates["conversation_form/form"]=function(e,t,n,r,i){function a(e,t){return'\n    <i class="icon icon-plus"></i>\n    <input type="text" name="name" placeholder="New thread"></input>\n    <button class=\'info\' data-hull-action="create">↵</button>\n    <i class="icon icon-cog" data-toggle="modal" data-target="#preferences"></i>\n'}function f(e,t){return"\n    <div data-hull-widget=\"login_button@hull\" class='login_buttons'></div>\n  "}this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{};var s="",o,u=this;s+='<form class="navbar-form plus">\n  ',o=n["if"].call(t,t.loggedIn,{hash:{},inverse:u.program(3,f,i),fn:u.program(1,a,i),data:i});if(o||o===0)s+=o;return s+="\n</form>\n\n",s},window.Hull.templates["conversation_form/form"]}),Hull.widget("conversation_form",{templates:["form"],refreshEvents:["model.hull.me.change"],initialize:function(){this.sandbox.on("hull.conversations.reload",function(e){this.options.id=e,this.render()},this)},actions:{create:function(e,t){e.preventDefault();var n=this,r=this.$el.find("form"),i=this.sandbox.dom.getFormData(r),s=(this.options.id||"app")+"/conversations";i.public=i.public||!0,this.api(s,"post",i).then(function(e){n.conversationId=e.id,setTimeout(function(){n.sandbox.emit("hull.conversations.reload",n.options.id),n.sandbox.emit("hull.conversation.select",e.id)},200),n.render()})}}}),Hull.require(["handlebars"],function(e){return window.Hull.templates||(window.Hull.templates={}),window.Hull.templates["conversations/list/list"]=function(e,t,n,r,i){function c(e,t){var r="",i,s,o;return r+='\n  <div class="media item" data-hull-action="select" data-hull-id="',(i=n.id)?i=i.call(e,{hash:{},data:t}):(i=e.id,i=typeof i===u?i.apply(e):i),r+=a(i)+'">\n    <a class="pull-left" href="#">\n      <img class="media-object avatar" src="'+a((i=(i=e.actor,i==null||i===!1?i:i.picture),typeof i===u?i.apply(e):i))+'">\n    </a>\n    <div class="media-body">\n      <h5 class="media-heading">',(s=n.name)?s=s.call(e,{hash:{},data:t}):(s=e.name,s=typeof s===u?s.apply(e):s),r+=a(s)+'</h5>\n      <small><i class="icon icon-power"></i> ',(s=n.messages_count)?s=s.call(e,{hash:{},data:t}):(s=e.messages_count,s=typeof s===u?s.apply(e):s),r+=a(s)+'</small>\n      ·\n      <small><i class="icon icon-sun_stroke"></i> ',o={hash:{},data:t},r+=a((i=n.fromNow||e.fromNow,i?i.call(e,e.updated_at,o):f.call(e,"fromNow",e.updated_at,o)))+"</small>\n    </div>\n  </div>\n",r}function h(e,t){var r="",i,s;r+="\n  ",s=n["if"].call(e,(i=e.errors,i==null||i===!1?i:i.conversations),{hash:{},inverse:l.program(6,d,t),fn:l.program(4,p,t),data:t});if(s||s===0)r+=s;return r+="\n",r}function p(e,t){return'\n    <div class="alert alert-error">\n      Unable to retrieve the conversations.\n    </div>\n  '}function d(e,t){var r="",i;return r+='\n  <div class="media item" data-hull-action="select" data-hull-id="',(i=n.id)?i=i.call(e,{hash:{},data:t}):(i=e.id,i=typeof i===u?i.apply(e):i),r+=a(i)+'">\n    <div class="media-body">\n      <h5 class="media-heading">There are no threads for this topic</h5>\n      <small>You can create one below</small>\n    </div>\n  </div>\n  ',r}this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{};var s="",o,u="function",a=this.escapeExpression,f=n.helperMissing,l=this;o=n.each.call(t,t.conversations,{hash:{},inverse:l.program(3,h,i),fn:l.program(1,c,i),data:i});if(o||o===0)s+=o;return s+='\n<div class="media item" data-hull-action="select" data-hull-id="',(o=n.id)?o=o.call(t,{hash:{},data:i}):(o=t.id,o=typeof o===u?o.apply(t):o),s+=a(o)+'">\n  <div class="media-body">\n    <a class="" href="https://github.com/hull/hull-conversations">Fork me on Github</a>\n  </div>\n</div>\n',s},window.Hull.templates["conversations/list/list"]}),Hull.require(["handlebars"],function(e){return window.Hull.templates||(window.Hull.templates={}),window.Hull.templates["conversations/thread/form"]=function(e,t,n,r,i){function l(e,t){var r="",i,s;r+='\n  <form data-hull-item="form">\n    <div class=\'media actions\'>\n      <div class="pull-left">\n        <img class="media-object avatar" src="'+a((i=(i=e.me,i==null||i===!1?i:i.picture),typeof i===u?i.apply(e):i))+'" alt="'+a((i=(i=e.me,i==null||i===!1?i:i.name),typeof i===u?i.apply(e):i))+'">\n      </div>\n      <div class="media-body message_entry">\n        <textarea name=\'description\' class="input-block-level" rows="3" placeholder="Send a message... "></textarea>\n        <button data-hull-action="message" data-hull-id="'+a((i=(i=e.conversation,i==null||i===!1?i:i.id),typeof i===u?i.apply(e):i))+'" class="btn btn-small">\n          <i class="icon icon-reply"></i>\n          ',s=n["if"].call(e,e.isNew,{hash:{},inverse:f.program(4,h,t),fn:f.program(2,c,t),data:t});if(s||s===0)r+=s;return r+="\n        </button>\n      </div>\n    </div>\n  </form>\n",r}function c(e,t){return"Send"}function h(e,t){return"Reply"}function p(e,t){return'\n  <div class="login">\n    <div class="actions">\n      <p>\n        <span data-hull-widget="login_button@hull"></span>\n        Sign in to join the conversation\n      </p>\n    </div>\n  </div>\n'}this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{};var s="",o,u="function",a=this.escapeExpression,f=this;o=n["if"].call(t,t.loggedIn,{hash:{},inverse:f.program(6,p,i),fn:f.program(1,l,i),data:i});if(o||o===0)s+=o;return s+="\n",s},window.Hull.templates["conversations/thread/form"]}),Hull.require(["handlebars"],function(e){return window.Hull.templates||(window.Hull.templates={}),window.Hull.templates["conversations/thread/thread"]=function(e,t,n,r,i){function p(e,t){return'\n  <div class="alert alert-error">Unable to retrieve the conversation</div>\n'}function d(e,t){var r="",i;r+="\n  ",i=n["if"].call(e,e.conversation,{hash:{},inverse:l.program(20,N,t),fn:l.program(4,v,t),data:t});if(i||i===0)r+=i;return r+="\n",r}function v(e,t){var i="",s,o;i+="\n\n    <div class=\"page-header\">\n      <div class='participants'>\n        ",o=(s=(s=(s=e.conversation,s==null||s===!1?s:s.participants),typeof s===a?s.apply(e):s),h.call(e,s,{hash:{},inverse:l.noop,fn:l.program(5,m,t),data:t}));if(o||o===0)i+=o;i+="\n      </div>\n      <h5>\n        <div class='pull-right'>\n          ",o=n["if"].call(e,(s=e.conversation,s==null||s===!1?s:s.isDeletable),{hash:{},inverse:l.noop,fn:l.program(7,g,t),data:t});if(o||o===0)i+=o;i+="\n          <small><strong>"+f((s=(s=e.conversation,s==null||s===!1?s:s.messages_count_unread),typeof s===a?s.apply(e):s))+" unread</strong> / "+f((s=(s=e.conversation,s==null||s===!1?s:s.messages_count),typeof s===a?s.apply(e):s))+" messages</small>\n        </div>\n        "+f((s=(s=e.conversation,s==null||s===!1?s:s.name),typeof s===a?s.apply(e):s))+"&nbsp;\n      </h5>\n    </div>\n\n    ",o=n["if"].call(e,(s=e.conversation,s==null||s===!1?s:s.notification_enabled),{hash:{},inverse:l.noop,fn:l.program(9,y,t),data:t});if(o||o===0)i+=o;i+="\n\n      ",o=n["if"].call(e,e.messages,{hash:{},inverse:l.noop,fn:l.program(12,w,t),data:t});if(o||o===0)i+=o;i+="\n      ",o=l.invokePartial(r["conversations.thread.form"],"conversations.thread.form",e,n,r,t);if(o||o===0)i+=o;return i+="\n  ",i}function m(e,t){var r="",i;return r+='\n          <img class="avatar" data-toggle="tooltip" title="',(i=n.name)?i=i.call(e,{hash:{},data:t}):(i=e.name,i=typeof i===a?i.apply(e):i),r+=f(i)+'" data-placement="bottom" src="',(i=n.picture)?i=i.call(e,{hash:{},data:t}):(i=e.picture,i=typeof i===a?i.apply(e):i),r+=f(i)+'" width="50" alt="',(i=n.name)?i=i.call(e,{hash:{},data:t}):(i=e.name,i=typeof i===a?i.apply(e):i),r+=f(i)+'">\n        ',r}function g(e,t){var n="",r;return n+='\n            <button data-hull-action="delete" data-hull-id="'+f((r=(r=e.conversation,r==null||r===!1?r:r.id),typeof r===a?r.apply(e):r))+'" class="btn btn-link btn-small">\n              <i class="icon icon-trash"></i>\n              Delete conversation\n            </button>\n          ',n}function y(e,t){var r="",i,s;r+='\n      <form class="hull-conversation__notifications">\n        <input type="checkbox" data-hull-action="notification" name="user_notification" ',s=n["if"].call(e,(i=e.conversation,i==null||i===!1?i:i.notification_enabled_user),{hash:{},inverse:l.noop,fn:l.program(10,b,t),data:t});if(s||s===0)r+=s;return r+="> notify\n      </form>\n    ",r}function b(e,t){return"checked"}function w(e,t){var r="",i,s;r+='\n        <ul class="media-list">\n          ',s={hash:{},inverse:l.noop,fn:l.program(13,E,t),data:t},(i=n.messages)?i=i.call(e,s):(i=e.messages,i=typeof i===a?i.apply(e):i),n.messages||(i=h.call(e,i,s));if(i||i===0)r+=i;return r+="\n        </ul>\n      ",r}function E(e,t){var r="",i,s,o;r+='\n            <li class="media ',i=n["if"].call(e,e.isMe,{hash:{},inverse:l.noop,fn:l.program(14,S,t),data:t});if(i||i===0)r+=i;r+='" data-hull-message-id="',(i=n.id)?i=i.call(e,{hash:{},data:t}):(i=e.id,i=typeof i===a?i.apply(e):i),r+=f(i)+'">\n              <div class="pull-left">\n                <img class="avatar media-object" src="'+f((i=(i=e.actor,i==null||i===!1?i:i.picture),typeof i===a?i.apply(e):i))+'" width="50" alt="'+f((i=(i=e.actor,i==null||i===!1?i:i.name),typeof i===a?i.apply(e):i))+'">\n              </div>\n              <div class="media-body">\n                <h6 class="media-heading">\n                  ',s=n["if"].call(e,e.isNew,{hash:{},inverse:l.noop,fn:l.program(16,x,t),data:t});if(s||s===0)r+=s;r+="\n                  "+f((i=(i=e.actor,i==null||i===!1?i:i.name),typeof i===a?i.apply(e):i))+'\n                  <small class="muted">',o={hash:{},data:t},r+=f((i=n.fromNow||e.fromNow,i?i.call(e,e.created_at,o):c.call(e,"fromNow",e.created_at,o)))+"</small>\n                </h6>\n                <p> ",o={hash:{},data:t},s=(i=n.autoLink||e.autoLink,i?i.call(e,e.body,o):c.call(e,"autoLink",e.body,o));if(s||s===0)r+=s;r+=' </p>\n                <div class="hull-messages__actions">\n                    ',s=n["if"].call(e,e.isDeletable,{hash:{},inverse:l.noop,fn:l.program(18,T,t),data:t});if(s||s===0)r+=s;return r+="\n                </div>\n              </div>\n            </li>\n          ",r}function S(e,t){return"mine"}function x(e,t){return'\n                    <small class="new_message">\n                      <i class="icon icon-fire"></i>\n                    </small>\n                  '}function T(e,t){var r="",i;return r+='\n                      <small>\n                        <a href="#" class=\'link\' data-hull-action="deleteMsg" data-hull-id="',(i=n.id)?i=i.call(e,{hash:{},data:t}):(i=e.id,i=typeof i===a?i.apply(e):i),r+=f(i)+'">Delete</a>\n                      </small>\n                    ',r}function N(e,t){return'\n    <div class="blank_slate">\n      <h2>Pick a conversation</h2>\n      <i class="icon-bubbles"></i>\n    </div>\n  '}this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),r=this.merge(r,e.partials),i=i||{};var s="",o,u,a="function",f=this.escapeExpression,l=this,c=n.helperMissing,h=n.blockHelperMissing;u=n["if"].call(t,(o=t.errors,o==null||o===!1?o:o.conversation),{hash:{},inverse:l.program(3,d,i),fn:l.program(1,p,i),data:i});if(u||u===0)s+=u;return s+="\n",s},window.Hull.templates["conversations/thread/thread"]}),Hull.require(["handlebars"],function(e){return window.Hull.templates||(window.Hull.templates={}),window.Hull.templates["login_button/login_button"]=function(e,t,n,r,i){function c(e,t){return'\n  <button data-hull-action="logout" class="btn btn-small btn-link">\n    Sign Out\n  </button>\n'}function h(e,t){var r="",i,s;r+="\n  ",i=n["if"].call(e,e.loggedOut,{hash:{},inverse:f.noop,fn:f.program(4,p,t),data:t});if(i||i===0)r+=i;r+="\n  ",s={hash:{},inverse:f.program(7,v,t),fn:f.noop,data:t},(i=n.authServices)?i=i.call(e,s):(i=e.authServices,i=typeof i===u?i.apply(e):i),n.authServices||(i=l.call(e,i,s));if(i||i===0)r+=i;return r+="\n",r}function p(e,t){var r="",i,s;r+="\n    ",s={hash:{},inverse:f.noop,fn:f.program(5,d,t),data:t},(i=n.loggedOut)?i=i.call(e,s):(i=e.loggedOut,i=typeof i===u?i.apply(e):i),n.loggedOut||(i=l.call(e,i,s));if(i||i===0)r+=i;return r+="\n  ",r}function d(e,t){var n="";return n+='\n      <button data-hull-action="login" data-hull-provider="'+a(typeof e===u?e.apply(e):e)+'" class="btn btn-'+a(typeof e===u?e.apply(e):e)+'"><i class="icon-'+a(typeof e===u?e.apply(e):e)+'"></i></button>\n    ',n}function v(e,t){var r="",i;r+="\n    ",i=n["if"].call(e,e.debug,{hash:{},inverse:f.noop,fn:f.program(8,m,t),data:t});if(i||i===0)r+=i;return r+="\n  ",r}function m(e,t){return'\n      <div class="alert">\n        <h4>Warning!</h4>\n        No Auth Services configured, please add at least one in the admin.\n      </div>\n    '}this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{};var s="",o,u="function",a=this.escapeExpression,f=this,l=n.blockHelperMissing;o=n["if"].call(t,t.matchingProviders,{hash:{},inverse:f.program(3,h,i),fn:f.program(1,c,i),data:i});if(o||o===0)s+=o;return s+="\n",s},window.Hull.templates["login_button/login_button"]}),Hull.require(["handlebars"],function(e){return window.Hull.templates||(window.Hull.templates={}),window.Hull.templates["subjects/list"]=function(e,t,n,r,i){function l(e,t){var r="",i;return r+="\n              <li><a href='#' data-hull-action='select' data-hull-uid='",(i=n.name)?i=i.call(e,{hash:{},data:t}):(i=e.name,i=typeof i===u?i.apply(e):i),r+=a(i)+"'>",(i=n.name)?i=i.call(e,{hash:{},data:t}):(i=e.name,i=typeof i===u?i.apply(e):i),r+=a(i)+"</a></li>\n            ",r}this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,e.helpers),i=i||{};var s="",o,u="function",a=this.escapeExpression,f=this;s+='<div class="navbar navbar-top">\n  <div class="navbar-inner">\n    <div class="container">\n      <ul class="nav pull-right">\n        <li class="dropdown">\n          <a href="" title="" class="dropdown-toggle" data-toggle="dropdown">\n            <span class=\'conversations-subject\'>All Topics</span>\n            <b class="caret"></b>\n          </a>\n\n          <ul class="dropdown-menu">\n            <li><a href=\'#\' data-hull-action=\'select\' data-hull-uid=\'\'> All Topics</a> </li>\n            <li class="divider"></li>\n            ',o=n.each.call(t,t.subjects,{hash:{},inverse:f.noop,fn:f.program(1,l,i),data:i});if(o||o===0)s+=o;return s+='\n          </ul>\n        </li>\n      </ul>\n      <h1>Hull Conversations</h1>\n    </div>\n  </div>\n</div>\n\n<div data-hull-widget="conversations/list@hull" class="topics" data-hull-visibility="public" data-hull-uid="',(o=n.name)?o=o.call(t,{hash:{},data:i}):(o=t.name,o=typeof o===u?o.apply(t):o),s+=a(o)+'"></div>\n    \n<div class="navbar navbar-bottom">\n  <div data-hull-widget="conversation_form" class="navbar-inner new_conversation"> </div>\n</div>\n\n<button class="navbar-toggle" type="button" data-hull-action="toggle">\n  <span class="arrow"></span>\n</button>\n',s},window.Hull.templates["subjects/list"]}),Hull.widget("subjects",{templates:["list"],subjects:[{name:"facebook",color:"#3B5998"},{name:"twitter",color:"#00A0D1"},{name:"pinterest",color:"#C8232C"},{name:"Prism",color:"#CC181E"}],initialize:function(){this.sandbox.once("hull.conversations.thread.render",function(){this.sandbox.on("hull.conversations.thread.render",this.actions.hide,this)},this)},beforeRender:function(e){return e.subjects=this.subjects,e},actions:{toggle:function(e,t){$(".page").toggleClass("closed")},hide:function(e,t){$(".page").addClass("closed")},show:function(e,t){$(".page").removeClass("closed")},select:function(e,t){if(t.data.uid)var n=this.sandbox.util.entity.encode(t.data.uid);else var n="";this.$el.find(".conversations-subject").html(t.data.uid||"All Topics"),this.sandbox.emit("hull.conversations.select",n)}}}),Hull.init({appId:"51ca47ed34e835fb410000d7",orgUrl:"http://hull-demos.hullapp.io",jsUrl:"http://hull-js.s3.amazonaws.com",debug:!0});