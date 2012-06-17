require "rvm/capistrano"
require "bundler/capistrano"

load "deploy/assets"

set :application, "thefrontend"

set :scm, :git
set :repository,  "https://github.com/chrisfinch/thefrontend.git"

server "ec2-176-34-120-195.eu-west-1.compute.amazonaws.com", :app, :web, :db, :primary => true
ssh_options[:keys] = [File.join(ENV["HOME"], ".ssh", "thefrontend_ubuntu.pem")]
set :user, "ubuntu"
set :use_sudo, false
set :deploy_to, "/var/www/#{application}"
set :deploy_via, :remote_cache

set :rvm_ruby_string, "1.9.3@tfe" 

before "deploy:setup", "rvm:install_ruby"

after "deploy:update_code", "rvm:trust_rvmrc"
after "deploy:restart", "deploy:cleanup"

namespace :deploy do
  task :start do ; end
  task :stop do ; end
  desc "Restart passenger"
  task :restart, :roles => :app, :except => { :no_release => true } do
    run "#{try_sudo} touch #{File.join(current_path,'tmp','restart.txt')}"
  end
end

namespace :rvm do
  desc "Trust rvmrc file"
  task :trust_rvmrc do
    run "rvm rvmrc trust #{current_release}"
  end
end