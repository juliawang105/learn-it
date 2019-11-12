
    @decks.each do |deck|
        json.set! deck.id do 
            json.extract! deck, :id, :name
        end
    end
