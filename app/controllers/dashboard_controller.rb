class DashboardController < ApplicationController

  def index
    gon.all_groups = Group.structure_group_to_task_data
  end

  def toggle_task
    respond_to :js, :json, :html
    task = Task.find(params['id'])
    Task.task_is_complete?(task) ?  Task.set_task_to_incomplete(task) : Task.set_task_to_complete(task)
    all_tasks = Task.all

    render :json => { :task => task, :all_tasks => all_tasks, :status => 200 }
  end


  def completed_count
    respond_to :js, :json, :html


    group_data = JSON.parse(params["data"][1])


    completed_tasks_for_group = Group.completed_tasks_count(group_data["id"])
    pp "completed_tasks_for_group", completed_tasks_for_group
    render :json => { data: completed_tasks_for_group, :status => 200 }
  end

  def total_tasks_count
    respond_to :js, :json, :html
    # binding.pry
    group_data = JSON.parse(params["data"][1])
    # binding.pry
    total_tasks_count_for_group = Group.total_tasks_count(group_data["id"])

    pp "total_tasks_count_for_group", total_tasks_count_for_group
    render :json => { data: total_tasks_count_for_group, :status => 200 }
  end

end
