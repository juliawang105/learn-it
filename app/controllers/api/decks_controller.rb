class Api::DecksController < ApplicationController
    before_action :require_login 

    def index
        @decks = Deck.all
        render :index 
    end

    def show
        @deck = Deck.find(params[:id])
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
        @deck = current_user.decks.find(params[:id])

        if @deck.update(deck_params)
            render :show 
        else 
            render json: @deck.errors.full_messages
        end 
    end

    def destroy
         @deck = current_user.decks.find(params[:id])
         @deck.destroy 
         render :show 
    end

    private 

    def deck_params
        params.require(:deck).permit(:name);
    end
end
