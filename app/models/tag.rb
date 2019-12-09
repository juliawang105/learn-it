class Tag < ApplicationRecord
    validates :name, presence: true 

    has_many :deck_tags
        primary_key: :id  
        foreign_key: :tag_id 
        class_name: 'DeckTag'
    
    has_many :decks,
        through: :deck_tags,
        source: :deck

end