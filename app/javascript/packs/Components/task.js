var React = require("react");
// var Link = require("react-router-dom").Link; //to create an anchor
var axios = require("axios");
axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest',
    'X-CSRF-TOKEN' : document.querySelector('meta[name="csrf-token"]').getAttribute('content')
};

class Task extends React.Component {
  constructor(props) {
    super(props);
    // debugger;
    //

    this.state = {
      completedAt: this.props.data.completedAt || 'Incomplete'
    };

    // debugger;
    this.toggleTask = this.toggleTask.bind(this)
    this.update_completed = this.update_completed.bind(this)
};

  update_completed(completedAt) {
    this.setState({
      completedAt: completedAt
    })
  }

  // componentDidMount() {
  //     const { completedAt} = this.props.data.completedAt || "Incomplete";
  //     this.setState({ completedAt });
  //   }

  toggleTask() {
    console.log('click event')
    // debugger;


    axios.put('/dashboard/toggle_task', this.props.data, {"responseType": 'json' })
    .then(function (response) {
      // debugger;

      this.update_completed(response.data.data.completedAt)
      // this.setState({completedAt: response.data.data.completedAt})
    }.bind(this))
    .catch(function (error) {
      console.log(error);
    });
  }



  render() {
    let dependency_count = this.props.data.dependencies.length
    let task = this.props.data.task
    let complete_date = this.props.data.completedAt || 'Incomplete'

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
            Completed At: {complete_date}
          </li>
        </ul>
      </div>
    )
  }
}

module.exports = Task;
