@scores.each do |score|
        json.set! score.id do 
            json.extract! score, :id, :deck_id, :learner_id, :card_id, :score
        end
    end