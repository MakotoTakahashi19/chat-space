class Api::MessagesController < ApplicationController
  def index
    @last_message = Message.find(params[:id])
    @messages = Message.where("id > ? ",@last_message.id).where(group_id: @last_message.group_id)
  end
end
