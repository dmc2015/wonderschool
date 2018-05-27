require 'rails_helper'

RSpec.describe Task, type: :model do
  describe Task do

    before(:each) do
      @group = create(:group, {:id => 1, :group => "My Group"})
      task_attr = {
        :completedAt => "2018-05-26 01:43:46 AM -0400",
        :created_at => "2018-05-21T06:34:36.831Z",
        :dependencies =>  [1, 3, 5],
        :group_id => @group.id,
        :id => 1,
        :task => "walk dog",
        :updated_at => "2018-05-26T05:43:46.653Z"
      }
      @task = create(:task, task_attr)
    end

  it 'should be able to be created' do
      expect(@task).to be_valid
    end

    it 'should be associated to a group' do
      expect(@task.id).to eq(@group.id)
    end

    it 'should return completed true when a task is completed' do
      expect(Task.task_is_complete?(@task)).to be true
    end

    it 'should return true when task is incomplete' do
      task = create(:task, {:group_id => @group.id})
      expect(Task.task_is_complete?(task)).to be false
    end

    it 'should change task to completed' do
      task = create(:task, {:group_id => @group.id})
      Task.set_task_to_complete(task)
      expect(Task.task_is_complete?(task)).to be true
    end

  end
end
