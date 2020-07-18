class CreateSchoolAmbassadors < ActiveRecord::Migration[6.0]
  def change
    create_table :school_ambassadors do |t|
      t.string :name
      t.string :major
      t.integer :school_id
      

      t.timestamps
    end
  end
end
