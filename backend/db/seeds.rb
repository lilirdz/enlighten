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
ProspectiveSchool.destroy_all
Resource.destroy_all
ResourceCategory.destroy_all

require 'httparty'

u1 = User.create!(name:"lili",username:"lilirod",password:"123")

category1 = Category.create!(name:"Target Schools",user_id:u1.id)

resource_category1 = ResourceCategory.create!(name:"Scholarships")
resource_category2 = ResourceCategory.create!(name:"Student Loan Information")
resource_category3 = ResourceCategory.create!(name:"Internships/Fellowships")
resource_category4 = ResourceCategory.create!(name:"Additional Resources")

resource1 = Resource.create!(name:"Jopwell",organization_url:"https://www.jopwell.com/", about_snippet:"Jopwell is a diversity hiring startup that helps companies connect with and recruit underrepresented ethnic minority candidates for jobs and internships.",resource_category_id:resource_category3.id)
resource2 = Resource.create!(name:"Student Loan Hero",organization_url:"https://studentloanhero.com",about_snippet:"Student Loan Hero is your destination for managing & eliminating student loans & personal debt.",resource_category_id:resource_category2.id)
resource3 = Resource.create!(name:"Nerd Wallet",organization_url:"https://www.nerdwallet.com/",about_snippet:"We're on a mission to provide clarity for all of life's financial decisions.",resource_category_id:resource_category2.id)
resource4 = Resource.create!(name:"Basta",organization_url:"https://projectbasta.com/",about_snippet:"Creating a bridge of opportunity  between employers and first-generation college goers of color to increase knowledge workforce diversity at all levels.",resource_category_id:resource_category3.id)
resource5 = Resource.create!(name:"America Needs You",organization_url:"https://www.americaneedsyou.org",about_snippet:"America Needs You fights for economic mobility for ambitious, first-generation college students. We do this by providing transformative mentorship and intensive career development.",resource_category_id:resource_category3.id)
resource6 = Resource.create!(name:"Grace Hopper Conference",organization_url:"https://ghc.anitab.org/",about_snippet:"The Grace Hopper Celebration of Women in Computing is a series of conferences designed to bring the research and career interests of women in computing to the forefront.",resource_category_id:resource_category4.id)
resource7 = Resource.create!(name:"Code2040",organization_url:"http://www.code2040.org/",about_snippet:"Code2040 is a community of Black and Latinx technologists and their allies who are diversifying tech to create a more equitable, inclusive, and prosperous economy.",resource_category_id:resource_category3.id)
resource8 = Resource.create!(name:"UStrive",organization_url:"https://www.ustrive.com/",about_snippet:"UStrive connects high school and college students with a mentor to help with everything from college applications and financial aid to exploring career opportunities -- all through our online mentoring platform.",resource_category_id:resource_category4.id)
resource9 = Resource.create!(name:"Southwest Lanzate Scholarship",organization_url:"https://www.hacu.net/hacu/Lanzate.asp",about_snippet:"HACU and Southwest Airlines will award roundtrip tickets to currently enrolled undergraduate and graduate students across the country who travel away from home to pursue a higher education.",resource_category_id:resource_category1.id)
resource10 = Resource.create!(name:"Cafe Bustelo Scholarship",organization_url:"https://www.cafebustelo.com/en/scholarship",about_snippet:"Café Bustelo® aims to invest in the Latino community by awarding scholarships to those who seek better futures for themselves, their families and their communities.",resource_category_id:resource_category1.id)
resource11 = Resource.create!(name:"Ron Brown Scholarship",organization_url:"https://www.ronbrown.org/section/apply/program-description",about_snippet:"The Ron Brown Scholarship honors the legacy of Ronald H. Brown through a selective scholarship program that advances higher education for community-minded and intellectually gifted African Americans.",resource_category_id:resource_category1.id)
resource12 = Resource.create!(name:"The Agnes Jones Jackson Scholarship",organization_url:"https://www.poisefoundation.org/the-agnes-jones-jackson-scholarship",about_snippet:"The Agnes Jones Jackson Scholarship was established in the memory of the late Agnes Jones Jackson who was a long time NAACP member from the San Francisco branch.",resource_category_id:resource_category1.id)


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


ps1 = ProspectiveSchool.create!(school_id:School.all.sample.id,user_id:u1.id,category_id:category1.id)