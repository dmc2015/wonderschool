Rails.application.routes.draw do
  root :to => 'dashboard#index'
  # binding.pry
  # match 'dashboard/event', :to => 'dashboard#event'
  get 'dashboard/toggle_task' => 'dashboard#toggle_task'
  put 'dashboard/toggle_task' => 'dashboard#toggle_task'


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
