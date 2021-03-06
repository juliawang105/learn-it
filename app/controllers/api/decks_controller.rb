class Api::DecksController < ApplicationController
	before_action :require_login 

	def index
		@decks = Deck.all
		render :index 
	end

	def show
		@deck = Deck.includes(:cards).includes(:saves).includes(:tags).find(params[:id])
		render :show 
	end

	def create
		@deck = Deck.new(deck_params)
		@deck.creator_id = current_user.id

		if @deck.save 
				render :show
		else 
				render json: @deck.errors.full_messages, status: 422 
		end
	end

	def update
		@deck = Deck.includes(:learners).includes(:creator).includes(:cards).includes(:saves).includes(:tags).find(params[:id])

		if @deck.update(deck_params) && @deck.creator_id == current_user.id
				render :show 
		else 
				render json: @deck.errors.full_messages
		end 
	end

	def destroy
		@deck = Deck.includes(:learners).includes(:creator).includes(:cards).includes(:saves).find(params[:id])
		
		if @deck.creator_id == current_user.id
			@deck.destroy
			render :show 
		else 
			render json: @deck.errors.full_messages, status: 422 
		end
	end

	private 

	def deck_params
		params.require(:deck).permit(:name, :creator_id);
	end

   
end
