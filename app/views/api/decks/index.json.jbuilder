
    @decks.each do |deck|
        json.set! deck.id do 
            json.extract! deck, :name
        end
    end
