Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]

    resources :decks do 
      resources :cards, only:[:create]
    end

    resources :cards, only: [:index, :update, :show, :destroy]
    resources :saves, only: [:index, :destroy, :create, :show]
    resources :scores, only: [:index, :create, :show, :update]
    resources :tags, only: [:create, :index, :show]
    resources :deck_tags, only:[:index, :show, :create, :destroy]
    resources :decks_search, only: [:index]
  end

end
