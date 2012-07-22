class ApplicationController < ActionController::Base

  protect_from_forgery

  private
  
  # Return the current user, if there is one logged in
  def current_user
    @_current_user ||= session[:user_id] && User.find(session[:user_id])
  end

end
