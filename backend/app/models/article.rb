class Article < ApplicationRecord
    belongs_to :school_ambassador
    has_many :comments
end
