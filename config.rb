require 'rack_environment'
require 'lib/retina.rb'
require 'lib/random-color.rb'
require 'lib/handlebars'

set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'
set :build_dir, 'tmp'

activate :livereload
activate :automatic_image_sizes

page "*", :layout => :layout, :page_type=>''

Sass::Script::Number.precision = 20

if File.exist?('./config/environment.yml')
  re = RackEnvironment.new({})
  re.update_environment!
end

# Build-specific configuration
configure :build do

  activate :minify_css
  activate :minify_javascript
  activate :cache_buster
  activate :gzip

  set :logging, true
end

# Activate sync extension
activate :sync do |sync|
  sync.fog_provider = 'AWS' # Your storage provider
  sync.fog_directory = ENV['AWS_BUCKET'] # Your bucket name
  sync.fog_region = ENV['AWS_REGION'] # The region your storage bucket is in (eg us-east-1, us-west-1, eu-west-1, ap-southeast-1 )
  sync.aws_access_key_id = ENV['AWS_KEY'] # Your Amazon S3 access key
  sync.aws_secret_access_key = ENV['AWS_SECRET'] # Your Amazon S3 access secret
  sync.existing_remote_files = 'keep' # What to do with your existing remote files? ( keep or delete )
  sync.gzip_compression = true # Automatically replace files with their equivalent gzip compressed version
  # sync.after_build = false # Disable sync to run after Middleman build ( defaults to true )
end
