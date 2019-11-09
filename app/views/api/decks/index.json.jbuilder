
json.decks do 
    @decks.each do |deck|
        json.set! deck.id do 
            json.extract! deck, :name, :creator_id 
        end
    end
end