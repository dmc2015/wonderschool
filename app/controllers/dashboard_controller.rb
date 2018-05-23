class DashboardController < ApplicationController
  def index
    gon.all_groups = Group.structure_group_to_task_data
  end

  def toggle_task
    p 'event'

    # respond_to do |format|
    #   format.html {render :index}
    #   format.json { render :json => { new_row: 'test', id: 'id', :status => 200 }, :layout => false}
    # end

    render :json => { new_row: 'test', id: 'id', :status => 200 }

  end
end
