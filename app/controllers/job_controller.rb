class JobController < ApplicationController

  def add
    
    title = params[:title]
    desc = params[:description]
    keywords = params[:keywords]

    if !keywords
      keywords = 'no keywords'
    end

    Job.create(
      title: title,
      description: desc,
      keywords: keywords
    )

  end

end
