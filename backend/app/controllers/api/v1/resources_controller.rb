class Api::V1::ResourcesController < ApplicationController
    def index
        render json: Resource.all
        # resources = Resource.all
        # serialized_resource = resources.map do |resource|
        #     {
        #         id: resource.id,
        #         name: resource.name,
        #         organization_url: resource.organization_url,
        #         about_snippet: resource.about_snippet,
        #         category: ResourceCategory.find(resource.resource_category_id).name
        #     }
        # end
        # render json: serialized_resource
    end

    
end
