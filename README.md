# DB設計
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|nill: false| 
|email|string|nill: false, unique: true|
|password|string|nill: false|
### Association
- has_many :groups, through: :users_groups
- has_many :messages
- has_many :users_groups

## users_groupsテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|nill: false, foreign_key: true|
|group_id|integer|nill: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string(10)|nill: false| 
### Association
- has_many :users, through: :users_groups
- has_many :comments
- has_many :users_groups

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|nill: false, foreign_key: true|
|group_id|integer|nill: false, foreign_key: true|
|text|text||
|image|string||
### Association
- belongs_to :user
- belongs_to :group
