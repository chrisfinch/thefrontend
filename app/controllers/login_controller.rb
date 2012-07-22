require 'core/user'

# User login related actions
class LoginController < ApplicationController

  # Log a user in with `:username` and `:password`
  def create
    user = User.authenticate(params[:username], params[:password])

    if !user.nil?
      session[:user_id] = user.id
    else
      session[:user_id] = nil
    end

    redirect_to root_url
  end

  # Log the current user out
  def destroy
    @_current_user = session[:user_id] = nil
    redirect_to root_url
  end

end