json.array! @new_messages do |new_message|
  json.content message.content
  json.image messagw.image
  json.created_at format_posted_time(message.created_at)
  json.user_name message.user.user_name
  json.id message.id
end