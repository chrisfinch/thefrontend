class Job

  include Mongoid::Document
  
  field :title, type: String
  field :company, type: String
  field :salary, type: String
  field :description, type: String
  field :type, type: String
  field :keywords, type: Array
  field :tags, type: Array

  # Get an array of the field names on this Document. Does not include _id.
  def self.storage_fields

    keys = Job.fields.keys
    keys.delete('_id')
    keys.delete('_type')
    
    return keys

  end

end