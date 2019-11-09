class Api::CardsController < ApplicationController
    before_action :require_login 

    def create
        @card = Card.new(card_params)

        if @card.save
            redirect_to deck_show 
        else 
            render json: @card.errors.full_messages,  status: 422 
        end
    end

    def update 
        @card = current_user.decks.cards.find(params[:id])
        
        if @card.update(card_params)
            redirect_to deck_show 
        else 
            render json: @card.errors.full_messages,  status: 422 
        end
    end

    def destroy
        @card = current_user.decks.cards.find(params[:id])
        @card.destroy

        redirect_to deck_show
    end 

    private 
    
    def card_params 
        params.require(:card).permit(:question, :answer, :deck_id)
    end
end
