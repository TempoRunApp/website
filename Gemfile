source 'https://rubygems.org'

ruby '2.1.1'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 4.1.0'

# Let Heroku manage the production database using PostgreSQL
# Locally, we'll stick with SQLite
gem 'sqlite3', group: [:development, :test]
gem 'pg', group: :production

# Gems used only for assets and not required
# in production environments by default.
group :assets do
  gem 'sass-rails',   '~> 4.0.3'
  gem 'coffee-rails', '~> 4.0.1'

  # Import the Bourbon Neat SASS framework.
  # Learn more at http://neat.bourbon.io/
  gem 'neat', '~> 1.5.1'

  # See https://github.com/sstephenson/execjs#readme for more supported runtimes
  # gem 'therubyracer', platforms: :ruby

  gem 'uglifier', '~> 2.5.0'
end

group :development, :test do
  gem 'rspec-rails', '~> 2.14.2'
end

gem 'jquery-rails', '~> 3.1.0'

# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.0.6'

# Thin is a fast web server for Rack applications.
gem 'thin', '~> 1.6.2'

# High Voltage makes it easy to display static web pages (e.g. welcome, about, faq, etc.)
gem 'high_voltage', '~> 2.1.0'

# To use ActiveModel has_secure_password
# gem 'bcrypt-ruby', '~> 3.0.0'

# Use unicorn as the app server
# gem 'unicorn'

# Deploy with Capistrano
# gem 'capistrano', group: :development

# To use debugger
# gem 'debugger'
