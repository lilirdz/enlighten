class Category < ApplicationRecord
    belongs_to :user
    # has_many :schools
    has_many :prospective_schools, through: :user
end
