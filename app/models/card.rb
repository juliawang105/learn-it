class Card < ApplicationRecord
    validates :question, :answer, :deck_id, presence: true 

    belongs_to :deck,
        primary_key: :id, 
        foreign_key: :deck_id,
        class_name: 'Deck'
    
    has_one :creator,
        through: :deck, 
        source: :creator
    
    has_many :scores, dependent: :destroy,
end
