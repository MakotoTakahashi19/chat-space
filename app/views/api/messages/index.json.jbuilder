json.array! @messages do |message|
  json.content message.content
  json.image image_tag message.image.url if message.image.present? 
  json.created_at message.created_at.strftime("%y/%m/%d %H:%M")
  json.user_name message.user.name
  json.id message.id
end
