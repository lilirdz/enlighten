class Api::V1::SchoolAmbassadorsController < ApplicationController

    def index
        render json: SchoolAmbassador.all
    end

    def show
        render json: SchoolAmbassador.find(params[:id])
      end
    
end
