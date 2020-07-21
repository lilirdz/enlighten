class School < ApplicationRecord
    has_many :school_years

    # paginates_per 9
end
