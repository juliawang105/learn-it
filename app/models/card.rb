class Card < ApplicationRecord
    validates :question, :answer, :deck_id, presence: true 

    belongs_to :deck,
        primary_key: :id, 
        foreign_key: :deck_id,
        class_name: 'Deck'
end
