class CreateDecks < ActiveRecord::Migration[5.2]
  def change
    create_table :decks do |t|
      t.string :name, null: false 
      t.integer :creator_id
      t.timestamps
    end
    add_index :decks, :name, unique: true 
  end
end
