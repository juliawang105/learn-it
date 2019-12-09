class Api::TagsController < ApplicationController
    before_action :require_login 

    def create 
        @tag = Tag.new(tag_params)

        if @tag.save 
            render json: @tag
        else  
            render json: @tag.errors.full_messages, status: 422 
        end 
    end

    def index
        @tags = Tag.all
        render :index 
    end

    def show 
        @tag = Tag.find(params[:id])
        render :show 
    end

    private 
    def tag_params 
        params.require(:tag).permit(:name)
    end
end
