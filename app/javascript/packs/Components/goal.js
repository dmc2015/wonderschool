var React = require("react");
var Task = require("./task");
var axios = require("axios");
axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest',
    'X-CSRF-TOKEN' : document.querySelector('meta[name="csrf-token"]').getAttribute('content')
};

// var Link = require("react-router-dom").Link; //to create an anchor

class Goal extends React.Component {
  constructor(props) {
    super(props);
    let group_data = props.data.all_groups;
    // this.state = {
    //   data: props
    // };

    // debugger;

    this.state = {
      completedAt: this.props.data.completedAt || 'Incomplete'
      // completedAt: this.props.data.completedAt || 'Incomplete'
    };

    this.update_completed = this.update_completed.bind(this)
    this.toggleTask = this.toggleTask.bind(this)

    // this.toggleTask()
  };

  update_completed(completedAt) {
    this.setState({
      completedAt: this.state.completedAt
    })
  };

  toggleTask(data) {
    console.log('clickevent')
    debugger;
    axios.put('/dashboard/toggle_task', data, {"responseType": 'json' })
      .then(function (response) {
      // debugger;

      this.update_completed(response.data.data.completedAt)
      // this.setState({completedAt: response.data.data.completedAt})
    }.bind(this))
    .catch(function (error) {
      console.log(error);
    });
  };

  render() {
    // let dependency_count = this.props.data.dependencies.length
    // let task = this.props.data.task
    // let complete_date = this.props.data.completedAt || 'Incomplete'

    return (
      <div className="goals">
      { this.props.data.all_groups.map(function(group){
        return(
          <div key={group[1].group_id} className="group-name">
          <p>{group[0]}</p>
          <div className="tasks" onClick={this.toggleTask.bind(this, group[1])}>
            <ul>
              <li>
                Task: {group[1].task}
              </li>
              <li>
                Number of Dependencies: {group[1].dependency_count}
              </li>
              <li>
                Completed At: {group[1].completedAt || "Incomplete"} {/*this.state.completedAt*/}
              </li>
            </ul>
          </div>


          {/*<Task className="task"
          data=group[1]}
          />*/}
          </div>
        )
      }.bind(this)
    )
  }
  </div>
)
}
}

module.exports = Goal;
