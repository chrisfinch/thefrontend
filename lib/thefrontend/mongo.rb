module Thefrontend

  # Mongo mixins (Thefrontend::Mongo)
  module Mongo

      # Mixin with Mongoid::Document
      # Get an array of the field names on the Document. Does not include _id.
      def storage_fields
        keys = self.fields.keys
        keys.delete('_id')
        keys.delete('_type')
        keys
      end

  end
end