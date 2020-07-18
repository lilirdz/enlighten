# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Category.destroy_all
School.destroy_all
SchoolYear.destroy_all
SchoolAmbassador.destroy_all
Article.destroy_all
ProspectiveSchool.destroy_all

require 'httparty'

u1 = User.create!(name:"lili",username:"lilirod",password:"123")

category1 = Category.create!(name:"Target Schools",user_id:u1.id)


MY_API_KEY = ENV['college_scorecard_api_key']
count = 0

while count < 28 do
    for year in (2007..2018) do
        data = "#{year}.student.size,#{year}.admissions.admission_rate.overall,#{year}.student.demographics.race_ethnicity.white,#{year}.student.demographics.race_ethnicity.black,#{year}.student.demographics.race_ethnicity.hispanic,#{year}.student.demographics.race_ethnicity.asian,#{year}.student.demographics.race_ethnicity.nhpi,#{year}.cost.tuition.in_state,#{year}.cost.tuition.out_of_state,#{year}.student.retention_rate.four_year.full_time,#{year}.student.share_firstgeneration,#{year}.aid.median_debt.first_generation_students,#{year}.completion.4_yr_completion.first_generation_students,#{year}.completion.6_yr_completion.first_generation_students,#{year}.earnings.10_yrs_after_entry.working_not_enrolled.mean_earnings"
        
        
        url = "https://api.data.gov/ed/collegescorecard/v1/schools?school.degrees_awarded.highest=3,4&fields=id,school.name,school.city,school.state,school.school_url,#{data}&per_page=100&sort=2018.student.size:desc&page=#{count}&api_key=#{MY_API_KEY}"
        
        response = HTTParty.get(url)

        response["results"].each do |school|
            # byebug
            if School.find_by(name:school["school.name"]) 
                s1 = School.find_by(name:school["school.name"])
                admissions_rate = school["#{year}.admissions.admission_rate.overall"]
                enrollment_size = school["#{year}.student.size"]
                demographics_white = school["#{year}.student.demographics.race_ethnicity.white"]
                demographics_black = school["#{year}.student.demographics.race_ethnicity.black"]
                demographics_hispanic = school["#{year}.student.demographics.race_ethnicity.hispanic"]
                demographics_asian = school["#{year}.student.demographics.race_ethnicity.asian"]
                demographics_nhpi = school["#{year}.student.demographics.race_ethnicity.nhpi"]
                tuition_in_state = school["#{year}.cost.tuition.in_state"]
                tuition_out_of_state = school["#{year}.cost.tuition.out_of_state"]
                retention_rate = school["#{year}.student.retention_rate.four_year.full_time"]
                first_gen_total_percentage = school["#{year}.student.share_firstgeneration"]
                first_gen_median_debt = school["#{year}.aid.median_debt.first_generation_students"]
                first_gen_4_year_completion = school["#{year}.completion.4_yr_completion.first_generation_students"]
                first_gen_6_year_completion = school["#{year}.completion.6_yr_completion.first_generation_students"]
                alumni_earnings_10_years = school["#{year}.earnings.10_yrs_after_entry.working_not_enrolled.mean_earnings"]


                sy = SchoolYear.create!(school_id:s1.id,year:year, admissions_rate:admissions_rate,enrollment_size:enrollment_size, demographics_black: demographics_black,demographics_white:demographics_white,demographics_hispanic: demographics_hispanic,demographics_asian:demographics_asian,demographics_nhpi:demographics_nhpi,tuition_in_state:tuition_in_state,tuition_out_of_state:tuition_out_of_state,retention_rate:retention_rate,first_gen_total_percentage:first_gen_total_percentage,first_gen_median_debt:first_gen_median_debt,first_gen_4_year_completion:first_gen_4_year_completion,first_gen_6_year_completion:first_gen_6_year_completion,alumni_earnings_10_years:alumni_earnings_10_years)
            else
                s2 = School.create!(name: school["school.name"], city: school["school.city"], state: school["school.state"],school_url: school["school.school_url"])
            end
        end

    end
    count +=1
end

school_ambassador1 = SchoolAmbassador.create!(name:"Roxy",major:"Mathematics",school_id:School.all.sample.id)

a1 = Article.create!(name:"Perks of Going to School Out of State", body:"hello world",school_ambassador_id:school_ambassador1.id)

ps1 = ProspectiveSchool.create!(school_id:School.all.sample.id,user_id:u1.id,category_id:category1.id)