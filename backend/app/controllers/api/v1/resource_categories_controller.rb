class Api::V1::ResourceCategoriesController < ApplicationController
    def index
        # render json: ResourceCategory.all
        rescource_categories = ResourceCategory.all
        serialized_resource_categories = rescource_categories.map do |category|
            {
                id: category.id,
                name: category.name,
                resources: category.resources.map do |resource|
                {
                    id: resource.id,
                    name: resource.name,
                    organization_url: resource.organization_url,
                    about_snippet: resource.about_snippet
                    # category: ResourceCategory.find(resource.resource_category_id).name
                }
                end
            }
        end
        render json: serialized_resource_categories
    end

    
end
