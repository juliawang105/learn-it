class Api::DecksSearchController < ApplicationController
    def index
        # debugger
        search_name = params[:query].downcase
        @decks = Deck.all.where( ['lower(name) LIKE?', "%#{search_name}%"])
        #(name: params[:query]) 
       
    end

    private
    def deck_search_params
        params.permit(:query)
    end
end
