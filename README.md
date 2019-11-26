## DBの設計

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, index: true|
|mail|string|null: false|

### Association
- has_many :groups, through: :members
- has_many :messages
- has_many :members

