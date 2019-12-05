class AddUniqueIndex < ActiveRecord::Migration[5.2]
  def change
    add_index :scores, [:learner_id, :card_id], unique: true 
  end
end
