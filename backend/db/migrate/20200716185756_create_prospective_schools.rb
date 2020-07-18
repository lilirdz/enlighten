class CreateProspectiveSchools < ActiveRecord::Migration[6.0]
  def change
    create_table :prospective_schools do |t|
      t.integer :school_id
      t.integer :user_id
      t.integer :category_id

      t.timestamps
    end
  end
end
