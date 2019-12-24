class Api::ScoresController < ApplicationController
	before_action :require_login 

	def index
		@scores = Score.all.where(deck_id: params[:deck_id]).where(learner_id: current_user.id)
		render :index
	end

	def create 
		@score = Score.create(score_params)
		
		if @score.save 
				render :show
		else 
				render json: @score.errors.full_messages, status: 422
		end
	end

	def show 
		@score = Score.includes(:card).includes(:learner)
		render :show 
	end

	def update 
		@score = current_user.scores.find_by(card_id: params[:score][:card_id])

		if @score.update(score_params)
				render :show
		else 
				render json: @score.errors.full_messages, status: 422
		end
	end

	private 
	
	def score_params
		params.require(:score).permit(:learner_id, :card_id, :score, :deck_id)
	end

end
