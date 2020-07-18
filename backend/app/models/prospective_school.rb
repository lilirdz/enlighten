class ProspectiveSchool < ApplicationRecord
    belongs_to :user
    belongs_to :school
    belongs_to :category
end
