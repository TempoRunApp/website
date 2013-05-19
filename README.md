# Welcome to Rails!

Follow a few (hopefully) quick steps to get this site up and running on your machine.

## Basic steps

- Install the correct version of ruby
- Install [Bundler] to take care of all of the dependencies for you
- Install the necessary libraries (called "gems") through Bundler
- Run the server

First of all, you'll want a Mac or UNIX server. I hear you can get it to work on windows, but you're on your own. You must be braver than I am.

## Mac OS X

If you have a mac, you the easiest way to start is with [homebrew]. Get it installed, then run the following commands:

    brew update
    brew install rbenv ruby-build openssl
    CONFIGURE_OPTS=--with-openssl-dir=`brew --prefix openssl` rbenv install 2.0.0-p0
    rbenv global 2.0.0-p0
    rbenv rehash
    gem install bundler
    rbenv rehash
    cd /path/to/project
    bundle install
    rbenv rehash
    rails server

## LINUX

If you have a LINUX machine instead, follow the instructions on the [rbenv repository] to install rbenv and ruby-build, then continue the same way. The commands would look like this:

    # Follow instructions at https://github.com/sstephenson/rbenv/
    rbenv install 2.0.0-p0
    rbenv global 2.0.0-p0
    rbenv rehash
    gem install bundler
    rbenv rehash
    cd /path/to/project
    bundle install
    rbenv rehash
    rails server

Aside from that, there's good guidance on StackOverflow and google. I've had luck just pasting any errors I've gotten into google and doing what it says.

One last note -- once you get it working, almost all of the HTML/CSS is in app/views/pages/welcome.html.erb and app/assets/stylesheets/pages/welcome.css.scss
Read more about [ERB] and [SASS], and you should be set to contribute.


[homebrew]: http://mxcl.github.io/homebrew/
[rbenv repository]: https://github.com/sstephenson/rbenv/
[Bundler]: http://gembundler.com
[ERB]: http://www.startuprocket.com/blog/a-quick-introduction-to-embedded-ruby-erb-eruby
[SASS]: http://sass-lang.com/
