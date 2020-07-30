class User < ApplicationRecord

    has_many :categories
    has_many :prospective_schools
    has_many :schools, through: :prospective_schools
    # has_many :comments
    # has_many :comments, through: :articles
    has_secure_password

    validates :username, uniqueness: true, presence: true
    validates :name, presence: true
end
