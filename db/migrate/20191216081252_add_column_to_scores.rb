class AddColumnToScores < ActiveRecord::Migration[5.2]
  def change
     add_column :scores, :deck_id, :integer
  end
end
