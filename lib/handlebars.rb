require 'handlebars_assets'

class HandlebarsAssets::TiltHandlebars
    def evaluate(scope, locals, &block)
      template_path = TemplatePath.new(scope)
 
      compiled_hbs = HandlebarsAssets::Handlebars.precompile(data, HandlebarsAssets::Config.options)

      template_namespace = HandlebarsAssets::Config.template_namespace
 
      <<-TEMPLATE
        Hull.require(['handlebars'], function(Handlebars) {
          window.Hull.templates || (window.Hull.templates = {});
          window.Hull.templates[#{template_path.name}] = #{compiled_hbs};
          return window.Hull.templates[#{template_path.name}];
        });
      TEMPLATE
    end
end
module Middleman::Renderers::Handlebars
  class << self
    def registered(app)
      app.inst.template_extensions :handlebars => :js, :hbs => :js
      ::Tilt.register ::HandlebarsAssets::TiltHandlebars, 'handlebars', 'hbs'
    end
 
    alias :included :registered
  end
end
HandlebarsAssets::Config.template_namespace = "Hull.templates"
HandlebarsAssets::Config.path_prefix = "widgets"
::Middleman::Templates.register :hbs, Middleman::Renderers::Handlebars
::Sprockets.register_engine :hbs, ::HandlebarsAssets::TiltHandlebars