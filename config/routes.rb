Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      devise_for :users
      resources :recruitments, only: %i[index]
      resources :friends
    end
  end
end
