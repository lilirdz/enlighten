class Category < ApplicationRecord
    belongs_to :user
    has_many :prospective_schools, through: :user
    has_many :schools, through: :prospective_schools

end
