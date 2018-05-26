class GroupCannotBeNull < ActiveRecord::Migration[5.1]
  def up
    change_column_null :group, :group, false
  end
  def down
    change_column_null :group, :group, true
  end
end
