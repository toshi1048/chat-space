## DBの設計

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, foreign_key: true|
|mail|string|null: false, foreign_key: true|

### Association
- has_many :groupes, through:members
- has_many :messagers
- has_many :members
