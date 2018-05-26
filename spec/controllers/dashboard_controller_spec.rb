require 'rails_helper'

RSpec.describe DashboardController, type: :controller do

  describe "GET #index" do
    it "returns http success" do
      get :index
      expect(response).to have_http_status(:success)
    end
  end

  describe "PUT #toggle_task" do
    # let(:attr) do
    group_attr = {
      :id => "1",
      :group => "My Group"
    }

    task_attr = {
      :completedAt => "2018-05-26 01:43:46 AM -0400",
      :created_at => "2018-05-21T06:34:36.831Z",
      :dependencies =>  [1, 3, 5],
      :group_id => "1",
      :id => 1,
      :task => "walk dog",
      :updated_at => "2018-05-26T05:43:46.653Z"
    }
  # end

  it "returns http success" do
    group = create(:group, group_attr)
    task = create(:task, task_attr)

    put :toggle_task, :params => task_attr

    expect(response).to have_http_status(:success)
  end
end
end
