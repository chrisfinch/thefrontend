class Job
  include Mongoid::Document
  
  field :title, type: String
  field :description, type: String
  field :keywords, type: String

  # Get an array of the field names on this Document. Does not include _id.
  def self.storageFields

    keys = Job.fields.keys
    keys.delete('_id')
    keys.delete('_type')
    
    return keys

  end

end