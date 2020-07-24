class Api::V1::CategoriesController < ApplicationController

    def index
        render json: Category.all
    end

    def show
        category = Category.find(params[:id])
        serialized_category = {
            name: category.name,
            user_id: category.user_id,
            prospective_schools: category.prospective_schools.map do |school|
                {
                id: school.id,
                category_id: school.category_id,
                school_id: school.school_id
                }
            end
        }
        render json: serialized_category
        # render json: category
    end

    def create 
        category_created = Category.create(
            name: params[:name],
            user_id: @user.id
        )
        render json: category_created
    end

    def update
        category_to_update = Category.find(params[:id])
        category_to_update.update(category_params)
        render json: category_to_update
    end

    def destroy 
        category_to_delete = Category.find(params[:id])
        # category_to_delete.prospective_schools.destroy_all
        category_to_delete.destroy
        render json: {"success": "category was deleted"}
    end

    private

    def category_params
        params.permit(:id,:name)
    end

end
