class Api::V1::SchoolsController < ApplicationController

    def index 
        render json: School.all
    end

    def show
      render json: School.find(params[:id])
    end
end
