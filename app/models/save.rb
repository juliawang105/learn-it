class Save < ApplicationRecord
    validates :learner_id, :deck_id, presence: true 

    belongs_to :learner,
        primary_key: :id, 
        foreign_key: :learner_id,
        class_name: 'User'
    
    belongs_to :deck, 
        primary_key: :id,
        foreign_key: :deck_id,
        class_name: 'Deck'
end
