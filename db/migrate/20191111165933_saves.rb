class Saves < ActiveRecord::Migration[5.2]
  def change
    create_table :saves do |t|
      t.integer :deck_id, null: false 
      t.integer :learner_id, null: false 
      t.timestamps
    end
    add_index :saves, [:deck_id, :learner_id], unique: true 
  end
end
