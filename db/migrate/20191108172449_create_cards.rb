class CreateCards < ActiveRecord::Migration[5.2]
  def change
    create_table :cards do |t|
      t.string :question, null: false 
      t.text :answer, null: false 
      t.integer :deck_id, null: false 
      t.timestamps
    end
    add_index :cards, :question
    add_index :cards, :answer
  end
end
