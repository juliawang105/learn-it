class CreateDeckTags < ActiveRecord::Migration[5.2]
  def change
    create_table :deck_tags do |t|
      t.integer :deck_id, null: false 
      t.integer :tag_id, null: false 
      t.timestamps
    end

    add_index :deck_tags, [:deck_id, :tag_id], unique: true 
  end
end
