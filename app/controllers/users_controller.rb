require 'core/user'

# User CRUD controller
class UsersController < ApplicationController

  # Show all Users
  def index
  end

  # Show the create User form
  def new
  end

  # Add a new User to the database
  def create
    user = User.new(username: params[:username])
    user.password = params[:password]
    user.save

    redirect_to root_url
  end

  # Show a single User
  def show
  end

  # Show the edit form for a User
  def edit
  end

  # Update a User in the database
  def update
  end

  # Remove a User from the database
  def destroy
  end

end