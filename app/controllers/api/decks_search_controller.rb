class Api::DecksSearchController < ApplicationController
    def index
        # debugger
        @decks = Deck.all.where( ['name LIKE?', "%#{params[:query]}%"])
        #(name: params[:query]) 
       
    end

    private
    def deck_search_params
        params.permit(:query)
    end
end
