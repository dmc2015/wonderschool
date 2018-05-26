class DashboardController < ApplicationController

  def index
    gon.all_groups = Group.structure_group_to_task_data
  end

  def toggle_task
    respond_to :js, :json, :html
    task = Task.find(params['id'])
    Task.task_is_complete?(task) ?  Task.set_task_to_incomplete(task) : Task.set_task_to_complete(task)

    render :json => { data: task, :status => 200 }
  end

end
