class Api::DecksSearchController < ApplicationController
	def index
			search_name = params[:query].downcase
			@decks = Deck.all.where( ['lower(name) LIKE?', "%#{search_name}%"])  
	end

	private
	def deck_search_params
			params.permit(:query)
	end
end
