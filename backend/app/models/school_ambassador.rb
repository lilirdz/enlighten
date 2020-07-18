class SchoolAmbassador < ApplicationRecord
    has_many :articles
    belongs_to :school
end
