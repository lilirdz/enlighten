class CreateSchoolYears < ActiveRecord::Migration[6.0]
  def change
    create_table :school_years do |t|
      t.integer :school_id
      t.integer :year
      t.float :admissions_rate
      t.integer :enrollment_size
      t.float :demographics_black
      t.float :demographics_hispanic
      t.float :demographics_asian
      t.float :demographics_nhpi
      t.float :demographics_white
      t.integer :tuition_in_state
      t.integer :tuition_out_of_state
      t.float :retention_rate
      t.float :first_gen_total_percentage
      t.float :first_gen_median_debt
      t.integer :first_gen_4_year_completion
      t.integer :first_gen_6_year_completion
      t.integer :alumni_earnings_10_years

      t.timestamps
    end
  end
end
