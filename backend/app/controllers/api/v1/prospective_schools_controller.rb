class Api::V1::ProspectiveSchoolsController < ApplicationController

    def index
        render json: ProspectiveSchool.all
    end

    def show
        render json: ProspectiveSchool.find(params[:id])
    end
    
    def create 
        prospective_school = ProspectiveSchool.new(prospective_school_params)

        if prospective_school.valid?
            prospective_school.save
            render json: {prospective_school: ProspectiveSchoolsSerializer.new(prospective_school)}, status: :created
        else
            render json: {error: "Failed to add school"}, status: :not_acceptable
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

    private

    def prospective_school_params
        params.require(:prospective_school).permit(:school_id, :category_id, :user_id)
    end
end
