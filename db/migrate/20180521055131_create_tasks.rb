class CreateTasks < ActiveRecord::Migration[5.1]
  def change
    create_table :tasks do |t|
      t.string :id
      t.string :group_id
      t.string :task
      t.string :dependencies
      t.string :completedAt

      t.timestamps
    end
  end
end
