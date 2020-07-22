class ResourceSerializer < ActiveModel::Serializer
  attributes :id, :name, :organization_url, :about_snippet, :resource_category_id
end
