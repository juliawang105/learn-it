class AddIndexToSaves < ActiveRecord::Migration[5.2]
  def change
    add_index :saves, [:deck_id, :learner_id], unique: true 
  end
end
