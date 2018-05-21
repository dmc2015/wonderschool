class ChangeGroupIdToHaveIndexInTask < ActiveRecord::Migration[5.1]
  def change
    add_index :tasks, :group_id
  end
end
