class Api::V1::SchoolYearsController < ApplicationController

    def index
        render json: SchoolYear.all, include: :school
    end

    def show
      render json: SchoolYear.find(params[:id])
    end
end
