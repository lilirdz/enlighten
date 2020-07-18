class Api::V1::UsersController < ApplicationController
    skip_before_action :logged_in?, only: [:create]
    
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
      serialized_schools = user.schools.map do |school| 
        {
          id: school.id,
          name: school.name,
          city: school.city,
          state: school.state,
          created_by: User.find(school.user_id).username,
          category: Category.find(school.category_id).name,
        }
      end
      user_serialized = {
        schools: serialized_schools
      }
      render json: user_serialized
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
  
