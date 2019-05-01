  json.content @message.content
  json.image image_tag @message.image.url if @message.image.present? 
  json.user_id @message.user.id
  json.id @message.id
  json.user_name @message.user.name
  json.created_at @message.created_at.strftime("%y/%m/%d %H:%M")
