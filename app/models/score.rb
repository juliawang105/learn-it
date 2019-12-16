class Score < ApplicationRecord
    validates :card_id, :learner_id, :score , presence: true 

    belongs_to :learner,
        primary_key: :id,
        foreign_key: :learner_id, 
        class_name: 'User'
    
    belongs_to :card,
        primary_key: :id, 
        foreign_key: :card_id,
        class_name: 'Card'

    belongs_to :deck, 
        primary_key: :id, 
        foreign_key: :deck_id,
        class_name: 'Deck'
end
