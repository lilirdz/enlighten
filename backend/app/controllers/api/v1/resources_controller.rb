class Api::V1::ResourcesController < ApplicationController
    def index
        render json: Resources.all
    end

    def show
        render json: Resources.find(params[:id])
    end
end
