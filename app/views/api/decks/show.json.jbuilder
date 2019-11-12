json.extract! @deck, :id, :name, :creator_id

#     # @deck.cards.each do |card|
#     json.set! card.id do 
#         json.extract! card, :question, :answer, :deck_id
#     end
# end

json.deck do 
    json.extract! @deck, :id, :name, :creator_id
end


json.extract! @deck, :cards 

   

    
    
    






