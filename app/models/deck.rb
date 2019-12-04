class Deck < ApplicationRecord
    validates :name,:creator_id, presence: true 

    belongs_to :creator,  
        primary_key: :id, 
        foreign_key: :creator_id,
        class_name: 'User'

    has_many :saves,
        primary_key: :id,
        foreign_key: :deck_id,
        class_name: 'Save'

    has_many :learners, 
        through: :saves,
        source: :learner

    has_many :cards, dependent: :destroy,
        primary_key: :id, 
        foreign_key: :deck_id,
        class_name: 'Card'

    has_many :scores,
        through: :cards,
        source: :scores 
end
