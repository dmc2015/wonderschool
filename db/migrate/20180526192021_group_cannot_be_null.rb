class GroupCannotBeNull < ActiveRecord::Migration[5.1]
  def up
    change_column_null :groups, :group, false
  end
  def down
    change_column_null :groups, :group, true
  end
end
