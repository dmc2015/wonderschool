var React = require("react");
var axios = require("axios");
var CompletedImg = require("packs/assets/images/Completed.svg")
var LockedImg = require("packs/assets/images/Locked.svg")
var IncompleteImg = require("packs/assets/images/Incomplete.svg")

//allows for put/post requests to rails 5 from axios
axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest',
    'X-CSRF-TOKEN' : document.querySelector('meta[name="csrf-token"]').getAttribute('content')
};

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completedAt: this.props.data.completedAt || 'Incomplete',
      all_groups: this.props.all_tasks.all_groups
    };
    this.toggleTask = this.toggleTask.bind(this)
};

  update_completed(completedAt, all_tasks) {
    this.setState({
      completedAt: completedAt || 'Incomplete',
      all_groups: all_tasks
    })
  }

  toggleTask() {
    axios.put('/dashboard/toggle_task', this.props.data, {"responseType": 'json' })
    .then(function (response) {
      this.update_completed(response.data.task.completedAt, response.data.all_tasks)
      this.props.completedCount(parseInt(response.data.task.group_id), this.state.all_groups)
    }.bind(this))
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    let dependency_count = this.props.data.dependencies.length
    let task = this.props.data.task
    return (
      <div className="tasks display-none" onClick={this.toggleTask.bind(this)}>
        <ul>
          <li>
            Task: {task} <span><img src={this.state.completedAt !== "Incomplete" ? CompletedImg : IncompleteImg}/></span>
          </li>
          <li>
            Number of Dependencies: {dependency_count}
          </li>
          <li>
            Completed At: {this.state.completedAt}
          </li>
        </ul>
      </div>
    )
  }
}

module.exports = Task;
