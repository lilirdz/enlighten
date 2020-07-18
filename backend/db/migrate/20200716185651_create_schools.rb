class CreateSchools < ActiveRecord::Migration[6.0]
  def change
    create_table :schools do |t|
      t.string :name
      t.string :city
      t.string :state
      t.string :school_url
      

      t.timestamps
    end
  end
end
