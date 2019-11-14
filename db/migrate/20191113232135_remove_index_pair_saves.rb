class RemoveIndexPairSaves < ActiveRecord::Migration[5.2]
  def change
    remove_index :saves,  [:deck_id, :learner_id]
  end
end
