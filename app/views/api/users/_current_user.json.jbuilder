json.users do
    json.set! current_user.id do 
        json.extract! current_user, :id, :first_name, :last_name
    end
end 



json.saves do
    current_user.saves.each do |save|
        json.set! save.id do 
            json.extract! save, :id, :deck_id, :learner_id    
        end
    end
end

json.scores do
    current_user.scores.each do |score|
        json.set! score.id do 
            json.extract! score, :id, :card_id, :learner_id, :score
            json.deck_id score.deck.id  
        end
    end
end