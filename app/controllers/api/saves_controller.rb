class Api::SavesController < ApplicationController
	before_action :require_login 

	def index 
		@saves = Save.all.where(learner_id: current_user.id)
		render :index
	end

	def create 
		@save = Save.create(save_params)

		if @save.save 
				render :show
		else 
				render json: @save.errors.full_messages, status: 422 
		end
	end

	def show 
		@save = Save.includes(:learner).includes(:deck).find(params[:id])
		render :show 
	end

	def destroy
		@save = Save.includes(:learner).includes(:deck).find(params[:id])
			if @save.destroy
				render json: ['yay']
			else
				render json: @save.errors.full_message
		end

	end

	private 
	def save_params
		params.require(:save).permit(:learner_id, :deck_id)
	end
end
