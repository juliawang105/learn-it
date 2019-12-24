class Api::DeckTagsController < ApplicationController
	before_action :require_login 

	def index
			# debugger
		@deck_tags = DeckTag.all.where(deck_id: params[:deck_id])
		render :index 
	end

	def show 
		@deck_tag = DeckTag.find(params[:id])
		render :show 
	end

	
	def create 
			# debugger
		@deck_tag = DeckTag.new(deck_tag_params)
		if @deck_tag.save 
				render :show
		else 
				render json: @deck_tag.errors.full_messages, status: 422
		end
	end

	def destroy
		@deck_tag = DeckTag.find(params[:id])
			if @deck_tag.destroy
				render json: ['yay']
			else
				render json: @deck_tag.errors.full_message
		end
	end

	private 
	def deck_tag_params 
		params.require(:deck_tag).permit(:deck_id, :tag_id)
	end
end
