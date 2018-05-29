source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

ruby '2.3.7'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.1.6'

# Use Puma as the app server
gem 'puma', '~> 3.7'
# Use SCSS for stylesheets
# gem 'sass-rails', '~> 5.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# See https://github.com/rails/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby

# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.2'
# Turbolinks makes navigating your web application faster. Read more: https://github.com/turbolinks/turbolinks
gem 'turbolinks', '~> 5'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.5'
# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 4.0'
# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development
#env variables
gem 'dotenv-rails'
gem 'pg'
gem 'eventmachine', '1.0.9.1'


group :development, :test do
  #rspec for testing
  gem 'rspec'
  #rspec req for CircleCI
  gem 'rspec_junit_formatter'
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  # Adds support for Capybara system testing and selenium driver
  gem 'capybara', '~> 2.13'
  gem 'selenium-webdriver'
  #for testing apis
  gem 'vcr'
  gem 'webmock'
  #for unit tests
  gem 'rspec-rails'
  #for factories
  gem 'factory_bot_rails'
  #test highlighting
  gem 'coderay'
  #gives coverage of code
  gem 'simplecov'
  #run tests on file save
  gem 'guard-rspec'
  #live reload
  gem 'guard-livereload'
  #fake data
  gem 'ffaker'
  #for break points and debugging
  gem 'pry-byebug'
  #code coverage
  gem 'rspec-simplecov'
  gem 'simplecov'
  gem 'poltergeist'
  gem 'phantomjs', :require => 'phantomjs/poltergeist'
  gem 'database_cleaner'
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> anywhere in the code.
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]



# Gemfile
gem 'webpacker', '~> 3.5'
# gem 'bootstrap', '~> 4.1.1'
gem 'sprockets'
gem 'jquery-rails'
gem 'gon'

gem 'bootstrap-sass', '~> 3.3.7'
gem 'sass-rails', '>= 3.2'
