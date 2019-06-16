Rails.application.routes.draw do
  get '/', to: 'home#index', as: 'home'
  get '/poems', to: 'poems#index', as: 'poems'
  get 'admin/sync'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '*any_path', to: redirect('/')
end
