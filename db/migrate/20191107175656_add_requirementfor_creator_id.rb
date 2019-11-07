class AddRequirementforCreatorId < ActiveRecord::Migration[5.2]
  def change
    change_column_null :decks, :creator_id, false 
  end
end
