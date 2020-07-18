class Api::V1::ProspectiveSchoolsController < ApplicationController

    def index
        render json: ProspectiveSchool.all
    end

    def show
        render json: ProspectiveSchool.find(params[:id])
    end
    
    def create 
        category = Category.find(params[:category_id])
        if category.user_id == @user.id
            prospective_school_created = ProspectiveSchool.create(
                school_id: params[:school_id],
                user_id: params[:user_id],
                category_id: params[:category_id]
            )
            render json: prospective_school_created
        else 
            render json: {"error": "You can only add prospective schools to a category that you own"}
        end
    end

    def update
        prospective_school_to_update = ProspectiveSchool.find(params[:id])
        if prospective_school_to_update.user_id == @user.id 
            prospective_school_to_update.update(
              category_id: params[:category_id]
            )
            render json: prospective_school_to_update
        else 
            render json: {"error": "You must have created the prospective school to edit it"} 
        end
    end

    def destroy 
        prospective_school_to_delete = ProspectiveSchool.find(params[:id])
        category = Category.find(prospective_school_to_delete.category_id)
        if category.user_id == @user.id
            prospective_school_to_delete.destroy
            render json: {"success": "prospective school was deleted"}
        else
           render json: {"error": "Only the user who owns the category can remove prospective schools"} 
        end
    end
end
