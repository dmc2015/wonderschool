var React = require("react");
var axios = require("axios");
//allows for put/post requests to rails 5 from axios
axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest',
    'X-CSRF-TOKEN' : document.querySelector('meta[name="csrf-token"]').getAttribute('content')
};

class Task extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      completedAt: this.props.data.completedAt || 'Incomplete'
    };

    this.toggleTask = this.toggleTask.bind(this)
    this.update_completed = this.update_completed.bind(this)
};

  update_completed(completedAt) {
    this.setState({
      completedAt: completedAt || 'Incomplete'
    })
  }

  toggleTask() {

    axios.put('/dashboard/toggle_task', this.props.data, {"responseType": 'json' })
    .then(function (response) {
      this.update_completed(response.data.data.completedAt)
    }.bind(this))
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    let dependency_count = this.props.data.dependencies.length
    let task = this.props.data.task
    return (
      <div className="tasks" onClick={this.toggleTask.bind(this)}>
        <ul>
          <li>
            Task: {task}
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
