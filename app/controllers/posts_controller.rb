class PostsController < ApplicationController
  def index
    friends = Friend.all

    render json: {
      friends: friends
    }, status: :ok
  end
end
