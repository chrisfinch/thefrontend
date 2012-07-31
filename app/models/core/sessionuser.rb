require 'core/user'

# Model that contains functionality to act on the currently logged in user
class SessionUser

  # Pass a reference to the session
  def initialize(session)
    @session = session
  end

  # Attempt to log a user in with the given username and password
  def login(username, password)
    user = User.authenticate(username, password)

    unless !user
      @session[:user] = user.id
    end

    user
  end

  # Remove the currently logged in user from the session
  def logout
    @session[:user] = nil
  end

end