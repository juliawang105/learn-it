class DeckTag < ApplicationRecord
    validates :deck_id, :tag_id, presence: true 

    belongs_to :deck, 
        primary_key: :id, 
        foreign_key: :deck_id,
        class_name: 'Deck'

    belongs_to :tag 
        primary_key: :id 
        foreign_key: :tag_id,
        class_name: 'Tag'
end
