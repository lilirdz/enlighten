Rails.application.routes.draw do
  # localhost:3000/api/v1/login
  namespace :api do
    namespace :v1 do
      resources :school_years, only: [:index,:show]
      resources :resources, only: [:index,:show]
      resources :resource_categories, only: [:index,:show]
      resources :prospective_schools
      resources :schools, only: [:index,:show]
      resources :school_ambassadors
      resources :categories
      resources :users
      post '/login', to: 'auth#create'
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
