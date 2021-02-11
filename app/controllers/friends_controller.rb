class FriendsController < ApplicationController
  def index
    friends = Friends.all

    render json: {
      friends: friends
    }, status: :ok
  end
end
