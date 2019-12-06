class MessagesController < ApplicationController
  def index
    @messages = message.all
  end

  def new
    @message = message.new
  end

  def create
    Message.create(message_params[:id])
  end

  def edit
    @message = Message.find(params[:id])
  end

  def update
    message = message.find(params[:id])
    message.update(message_params)
  end
end
