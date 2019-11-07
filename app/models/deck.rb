class Deck < ApplicationRecord
    validates :name,:creator_id, presence: true 

    belongs_to :creator,  
        primary_key: :id, 
        foreign_key: :creator_id,
        class_name: 'User'
end
