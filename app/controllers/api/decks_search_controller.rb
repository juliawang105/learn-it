class Api::DecksSearchController < ApplicationController
    def index
        @decks = Decks.all.where('name LIKE?', '%#{query}%') || 
    end

    private
    def deck_search_params
        params.require(:search).permit(:query)
    end
end
