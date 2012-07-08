class JobsController < ApplicationController

  respond_to :json

  # Show all Jobs
  def index

    respond_with Job.all

  end

  # Show the form to create new jobs
  def new
  end

  # Create a new Job in the database
  def create

    create_fields = {}

    Job.storage_fields.each do |field|
      create_fields[field] = params[field.to_sym]
    end

    respond_with Job.create(create_fields)

  end
  
  # Show a single Job
  def show

    respond_with Job.find(params[:id])

  end

  # Show the edit form for a Job
  def edit
  end

  # Update a Job in the database
  def update

    job = Job.find(params[:id])

    Job.storage_fields.each do |field|
      job[field.to_sym] = params[field.to_sym]
    end

    respond_with job.save

  end

  # Remove a Job from the database
  def destroy

    respond_with Job.find(params[:id]).delete

  end
  
end
