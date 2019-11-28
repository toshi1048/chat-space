# README

<<<<<<< Updated upstream
This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
=======
## groups_users table
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|


### Association
- belongs_to :group
- belongs_to :user


## message table
|Column|Type|Options|
|------|----|-------|
|body|text|index:true|
|image|string|index:true|
|group_id|integer|null: false, foreign_key: tru|
|user_id|integer|null: false, foreign_key: tru|



## groups table
|Column|Type|Options|
|------|----|-------|
|name|string|index:true,unique:true|
|mail|string|null:false|




### Association
- has_many :groups, through: :members
- has_many :messages
- has_many :members
>>>>>>> Stashed changes
