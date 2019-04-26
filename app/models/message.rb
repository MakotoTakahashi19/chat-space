class Message < ApplicationRecord
  belongs_to :user
  belongs_to :group
  validates :content,
    presence:{if: 'image.blank?'}
  validates :image,
    presence:{if: 'content.blank?'}
  mount_uploader :image, ImageUploader
end
