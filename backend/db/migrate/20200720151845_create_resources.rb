class CreateResources < ActiveRecord::Migration[6.0]
  def change
    create_table :resources do |t|
      t.string :name
      t.string :organization_url
      t.string :about_snippet
      t.integer :resource_category_id

      t.timestamps
    end
  end
end
