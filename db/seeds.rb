# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

1.upto(10) do |num|
  group = Group.create(:group => "Group Number #{num}")
  Task.create({:group_id => group.id, :task => "walk dog", :dependencies => [1,3,5], :completedAt => nil})
end
#
#
# t.string "group_id"
# t.string "task"
# t.jsonb "dependencies"
# t.string "completedAt"
# t.datetime "created_at", null: false
# t.datetime "updated_at", null: false
# t.index ["group_id"], name: "index_tasks_on_group_id"
