# json.deck do 
#     json.partial! 'api/decks/deck', deck: @deck 
# end

# json.cards do 
#     @deck.cards.each do |card| 
#         json.set! card.id do 
#             json.extract! card, :id, :question, :answer, :deck_id 
#         end
#     end
# end

    

    json.extract! @deck, :id, :name, :learners 

   

json.saves do 
    @deck.saves.each do |save| 
        json.set! save.id do 
            json.extract! save, :id, :learner_id, :deck_id
        end
    end
end 