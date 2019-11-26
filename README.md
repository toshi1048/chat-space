### DB設計

## users table

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, foreign_key: true|
|mail|string|null: false, foreign_key: true|

### Association
- has_many :groups, through:members
- has_many :messagers
- has_many :members
