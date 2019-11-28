README


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
|body|text||
|image|string||
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user



## users table
|Column|Type|Options|
|------|----|-------|
|name|string|index:true,unique:true|
|mail|string|null:false|

## groups table
|Column|Type|Options|
|------|----|-------|
|name|string|index:true,unique:true|
|mail|string|null:false|



### Association
- has_many :groups,through:groups_users
- has_many :messages
- has_many :groups_users