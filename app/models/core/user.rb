require 'digest/sha2'

# Core User object
class User

  include Mongoid::Document
  include Thefrontend::Mongo
  include Thefrontend::Utils

  field :hashed_password, type: String
  field :username, type: String
  field :salt, type: String

  attr_protected :salt
  attr_protected :hashed_password

  validates_uniqueness_of :username

  # Store password on object and set hashed_password in the database
  # Need to save after updating
  def password=(password)
    @password = password

    if !self.salt
      self.salt = random_string(20)
    end

    self.hashed_password = User.encrypt(@password, self.salt)
  end

  # SHA2 the given password and salt
  def self.encrypt(password, salt = '')
    Digest::SHA2.hexdigest(password + salt)
  end

  # Autheticate a user against the given username and password
  def self.authenticate(username, password)
    user = User.find_by(username: username)
    if user.hashed_password == User.encrypt(password, user.salt)
      user
    else
      nil
    end
  end

end