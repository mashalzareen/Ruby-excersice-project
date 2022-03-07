# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users
  resources :posts do
    collection do
      get :public
    end
    resources :opinions
    # resources :image_elements
  end
  put '/post/:id/like', to: 'posts#like', as: 'like'
  root 'posts#public'
end
