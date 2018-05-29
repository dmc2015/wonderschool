Rails.application.routes.draw do
  root :to => 'dashboard#index'
  # binding.pry
  # match 'dashboard/event', :to => 'dashboard#event'
  get 'dashboard/toggle_task' => 'dashboard#toggle_task'
  put 'dashboard/toggle_task' => 'dashboard#toggle_task'
  get 'dashboard/completed_count' => 'dashboard#completed_count'
  get 'dashboard/total_tasks_count' => 'dashboard#total_tasks_count'


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
