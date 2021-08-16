Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :projects, only: [:index, :show] do
        resources :comments, only: [:index, :create]
      end
    end
  end 
end