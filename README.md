# DB設計
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string(10)|nill: false| 
|email|string|nill: false, unique: true|
|password|string|nill: false|
### Association
- has_many :groups, through: :users_groups
- has_many :messages

## users_groupsテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|nill: false, foreign_key: true|
|group_id|integer|nill: false, foreign_key: true|
### Association
- has_many :users
- has_many :groups

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|group_name|string(10)|nill: false| 
### Association
- has_many :user, through: :users_groups

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|nill: false, foreign_key: true|
|group_id|integer|nill: false, foreign_key: true|
|text|text||
|image|string||
### Association
- belongs_to :user
- has_many :groups
