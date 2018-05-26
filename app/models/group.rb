class Group < ApplicationRecord
  has_many :tasks

  validates :group, presence: true, uniqueness: true
  validates_presence_of :group


  def self.structure_group_to_task_data(structured_data={})
    Group.all_group_data.each{ |group| structured_data[group.group] = Task.find_by(:group_id => group.id) }
    structured_data.to_a
  end

  def self.all_group_data
    @all_groups = Group.all
  end
end
