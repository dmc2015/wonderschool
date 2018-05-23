# README


CODE CHALLENGE WONDERSCHOOL

- STEPS SETUP Configuration FOR CI *
- STEPS SETUP Configuration FOR CD
- SETUP TEST TOOLS *
- SORT DB STRUCTURE *
  * rails g model group group
  * rails g model task group_id task dependencies completedAt
  * rails g migration change_dependency_to_be_json_in_task
- SORT OUT ROUTES *
- SORT VIEWS *
- SET UP SEEDS *
- IMPLEMENT WEBPACKER AND SETUP A REACT VIEW
  * install bootstrap
  * sketch ui
  * decide on the structure of the components
  * decide where the assets should be placed
  * set up the loop/iteration to list the groups
  * set up the loop/iteration to list the tasks
  * make a js function that can hit rails or a rails method that can be called from js
  * hide all the tasks by default
  * setup utilities module for handling click events on the main group items (rotate a caret ?)
  * setup utilities module for handling click events & the check for all complete subtasks of a group
  * setup utilities module for handling click events & the check for all completed dependent tasks
    * provide a modified UI view when both events occur




This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
