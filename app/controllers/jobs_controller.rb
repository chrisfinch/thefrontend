class JobsController < ApplicationController

  respond_to :json, :html

  def index
    respond_with(@jobs = Job.all.map { |job| job.to_json })
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
