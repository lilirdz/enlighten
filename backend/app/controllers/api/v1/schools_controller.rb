class Api::V1::SchoolsController < ApplicationController

    def index 
        render json: School.all, include: :school_years
    end

    def show
      render json: School.find(params[:id])
    end
end
