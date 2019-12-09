class Api::DeckTagsController < ApplicationController
    before_action :require_login 

    def create 
        @deck_tag = DeckTag.new(deck_tag_params)

        if @deck_tag.save 
            render json: @deck_tag 
        else 
            render json: @deck_tag.errors.full_messages, status: 422
        end
    end

    def destroy
        # debugger
        @deck_tag = DeckTag.find(params[:id])
         if @deck_tag.destroy
            render json: ['yay']
         else
            render json: @deck_tag.errors.full_message
        end
  
    end
end
