
json.extract! @save, :id, :deck_id, :learner_id, :deck
	json.deck_name @save.deck.name 
# json.set! @save.deck_id do 
#     json.extract! @save, :id, :deck_id, :learner_id, :deck
# end

