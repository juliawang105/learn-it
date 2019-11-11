class Api::SavesController < ApplicationController
    before_action :require_login 

    def create 
        @save = Save.create(save_params)
        # @save.learner_id = current_user.id 
        # @save.deck_id = params[:id]

        if @save.save 
            render json: 'Saved!'
        else 
            render json: @save.errors.full_messages, status: 422 
        end
    end

    def destroy
        @save = Save.find(params[:id])
         if @save.destroy
            render json: 'deleted!'
         else
            render json: @save.errors.full_message
        end
  
    end

    private 
    def save_params
        params.require(:save).permit(:learner_id, :deck_id)
    end
end
