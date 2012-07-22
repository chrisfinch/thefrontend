# Job entity
class Job

  include Mongoid::Document
  include Thefrontend::Mongo

  field :title, type: String
  field :company, type: String
  field :salary, type: String
  field :description, type: String
  field :type, type: String
  field :tags, type: Array

end