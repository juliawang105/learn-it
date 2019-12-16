@saves.each do |save|
        json.set! save.id do 
            json.extract! save, :id, :deck_id, :learner_id
        end
    end