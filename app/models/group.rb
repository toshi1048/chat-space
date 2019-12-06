class Group < ApplicationRecord
<<<<<<< Updated upstream
  has_many :group_users
  has_many :users, through: :group_users
  validates :name, presence: true, uniqueness: true
=======
>>>>>>> Stashed changes
end
