# DB設計
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|nill: false| 
|email|string|nill: false, unique: true|
|password|string|nill: false|
### Association
- has_many :groups, through: :user_groups
- has_many :messages
- has_many :user_groups

## user_groupsテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|references|nill: false, foreign_key: true|
|group_id|references|nill: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|nill: false| 
### Association
- has_many :users, through: :user_groups
- has_many :messages
- has_many :user_groups

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|references|nill: false, foreign_key: true|
|group_id|references|nill: false, foreign_key: true|
|text|text||
|image|string||
### Association
- belongs_to :user
- belongs_to :group
