class ChangeDependencyToBeJsonInTask < ActiveRecord::Migration[5.1]
  def change
    change_column :tasks, :dependencies, :jsonb, using: 'dependencies::text::jsonb'
  end
end
