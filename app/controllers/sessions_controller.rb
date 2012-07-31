require 'core/sessionuser'

# Session related actions
class SessionsController < ApplicationController

  respond_to :json

  # Attempt to log a user in. Respond with a 401 if auth fails.
  def login
    user = session_user.login(params[:username], params[:password])

    if user
      respond_with user
    else
      render :json => user, :status => :unauthorized
    end
  end

  # Log the current user out
  def logout
    session_user.logout
  end

end