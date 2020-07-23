class Category < ApplicationRecord
    belongs_to :user
    has_many :prospective_schools, dependent: :destroy
    has_many :schools, through: :prospective_schools

end
