Rails.application.routes.draw do

  devise_for :users
  # before_action "users#index" if user_signed_in?
  root "groups#index"
  resources :users, only: [:index, :edit,:update] 
  resources :groups, only: [:new, :create, :edit, :update] do
    resources :messages, only: [:index, :create]
  end
end
