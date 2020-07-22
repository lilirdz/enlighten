class ProspectiveSchoolsSerializer < ActiveModel::Serializer
  attributes :id, :school_id, :user_id, :category_id
end
