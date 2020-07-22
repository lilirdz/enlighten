class Api::V1::UsersController < ApplicationController
    skip_before_action :logged_in?, only: [:create]

    def index
      render json: User.all
    end
    
    # Sign Up
    def create
      user = User.new(user_params)
  
      if user.valid?
        user.save
        render json: {user: UserSerializer.new(user)}, status: :created
      else
        render json: {error: "Failed to create a user"}, status: :not_acceptable
      end
    end

    def show
      user = User.find(params[:id])
      serialized_schools = user.prospective_schools.map do |school| 
        {
          id: school.id,
          school: School.find(school.school_id),
          category: Category.find(school.category_id).name
        }
      end
      serialized_categories = user.categories.map do |category|
        {
        id: category.id,
        name: category.name
        }
      end
      user_serialized = {
        user: user,
        schools: serialized_schools,
        categories: serialized_categories
      }
      render json: user_serialized
      # render json: user
    end

    def destroy
      if params[:id] == @user.id.to_s
        @user.destroy
        render json: {"success": "user account has been deleted"}
      else 
        render json: {"error": "only the owner of the account can delete"}
      end
    end
  
    private
  
    def user_params
      params.require(:user).permit(:name,:username, :password)
    end
  end
  
