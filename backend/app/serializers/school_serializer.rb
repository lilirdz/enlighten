class SchoolSerializer < ActiveModel::Serializer
  attributes :id, :name, :city, :state, :school_url
end
