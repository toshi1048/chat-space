class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
<<<<<<< Updated upstream
         :recoverable, :rememberable, :validatable
=======
         :recoverable, :rememberable,  :validatable
>>>>>>> Stashed changes

  has_many :messages
  has_many :group_users
  has_many :groups, through: :group_users
<<<<<<< Updated upstream
end
=======
end
>>>>>>> Stashed changes
