class Task < ApplicationRecord
  belongs_to :group

  def self.task_is_complete?(task)
    task.completedAt.is_a? String
  end

  def self.set_task_to_incomplete(task)
    task.update(:completedAt => nil)
  end

  def self.set_task_to_complete(task)
    task.update(:completedAt => DateTime.now.strftime("%Y-%m-%d %r %z"))
  end
end
