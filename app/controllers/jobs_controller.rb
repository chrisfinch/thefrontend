class JobsController < ApplicationController

  respond_to :json

  def index
    respond_with Job.all
  end

  def new
  end

  def create
    respond_with Job.create(
      title: params[:title],
      description: params[:description],
      keywords: params[:keywords]
    )
  end

  def show
  end

  def edit
  end

  def update
  end

  def destroy
  end
  
end
