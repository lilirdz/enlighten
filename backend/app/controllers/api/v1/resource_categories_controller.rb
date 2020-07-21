class Api::V1::ResourceCategoriesController < ApplicationController
    def index
        render json: ResourceCategories.all, include: :resources
    end

    def show
        render json: ResourceCategories.find(params[:id])
    end
end
