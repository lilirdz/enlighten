Rails.application.routes.draw do
  # localhost:3000/api/v1/login
  namespace :api do
    namespace :v1 do
      resources :comments
      resources :school_years
      resources :articles, only: [:index,:show]
      resources :prospective_schools
      resources :schools, only: [:index,:show]
      resources :school_ambassadors
      resources :categories
      resources :users, only: [:create, :destroy, :show]
      post '/login', to: 'auth#create'
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
