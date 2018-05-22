class DashboardController < ApplicationController
  def index
    @all_groups = Group.all
    gon.all_groups = @all_groups
  end
end
