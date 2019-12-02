class Levels < ActiveRecord::Migration[5.2]
  def change
    create_table :scores do |t|
      t.integer :score
      t.integer :card_id
      t.integer :learner_id
      t.timestamps
    end
  end
end
