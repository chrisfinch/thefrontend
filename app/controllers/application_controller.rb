class ApplicationController < ActionController::Base

  protect_from_forgery

  private

  # Provides access to a global SessionUser object, and gives it access to
  # the session.
  def session_user
    @session_user ||= SessionUser.new(session)
  end
  
  helper_method :session_user

end