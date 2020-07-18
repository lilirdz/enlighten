class CategoriesController < ApplicationController

    def index
        render json: Category.all, include: :schools
    end

    def show
        category = Category.find(params[:id])
        serialized_category = {
            name: category.name,
            user_id: category.user_id,
            schools: category.schools.map do |school|
                {
                id: school.id,
                name: school.name,
                city: school.city,
                state: school.state,
                created_by: User.find(school.user_id).username,
                category: Category.find(school.category_id).name,
                }
            end
        }
        render json: serialized_category
    end

    def create 
        category_created = Category.create(
            name: params[:name],
            user_id: @user.id
        )
        render json: category_created
    end

    def destroy 
        category_to_delete = Category.find(params[:id])
        if category_to_delete.user_id == @user.id
            category_to_delete.destroy
            render json: {"success": "category was deleted"}
        else 
            render json: {"error": "You must have created the category to delete it"}
        end 
    end

end
