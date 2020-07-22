class Api::V1::SchoolsController < ApplicationController

    def index 
      # @schools = School.page(params[:page])
      #   render json: @schools
      render json: School.all
    end

    def show
      school = School.find(params[:id])
      serialized_school = {
        id: school.id,
        name: school.name,
        city: school.city,
        state: school.state,
        school_url: school.school_url,
        school_years: school.school_years.map do |syear|
            {
            id: syear.id,
            school_id: syear.school_id,
            year: syear.year,
            admissions_rate: syear.admissions_rate,
            enrollment_size: syear.enrollment_size,
            demographics_black: syear.demographics_black,
            demographics_hispanic: syear.demographics_hispanic,
            demographics_asian: syear.demographics_asian,
            demographics_nhpi: syear.demographics_nhpi,
            demographics_white: syear.demographics_white,
            tuition_in_state: syear.tuition_in_state,
            tuition_out_of_state: syear.tuition_out_of_state,
            retention_rate: syear.retention_rate,
            first_gen_total_percentage: syear.first_gen_total_percentage,
            first_gen_median_debt: syear.first_gen_median_debt,
            first_gen_4_year_completion: syear.first_gen_4_year_completion,
            first_gen_6_year_completion: syear.first_gen_6_year_completion,
            alumni_earnings_10_years: syear.alumni_earnings_10_years
            }
        end
    }
    render json: serialized_school
    end
end
