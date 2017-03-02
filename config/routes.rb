Rails.application.routes.draw do
  get 'home/index'
  get 'home/temp'

  get 'home/privacy_policy'
  get 'home/faq'
  get 'home/code_of_conduct'
  get 'home/terms_and_conditions'


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "home#index"
end
