Rails.application.routes.draw do
  devise_for :users
  resources :recruitments, only: %i[index]
  resources :friends
end
