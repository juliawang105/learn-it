@cards.each do |card|
        json.set! card.id do 
            json.extract! card, :id, :deck_id
        end
    end