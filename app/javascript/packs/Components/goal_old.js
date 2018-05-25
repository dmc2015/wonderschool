var React = require("react");
var Task = require("./task");

// var Link = require("react-router-dom").Link; //to create an anchor

class Goal extends React.Component {
  constructor(props) {
    super(props);
    let group_data = props.data.all_groups;
    // this.state = {
    //   data: props
    // };

    debugger;

    // this.state = {
    //   completedAt: this.props.data.completedAt || 'Incomplete'
    //   // completedAt: this.props.data.completedAt || 'Incomplete'
    // };

    this.update_completed = this.update_completed.bind(this)

  };

  update_completed(completedAt) {
    this.setState({
      completedAt: this.state.completedAt
    })
  }

  render() {
    return (
      <div className="goals">
      { this.props.data.all_groups.map(function(group){

        return(
          <div key={group[1].group_id} className="group-name">
          <p>{group[0]}</p>
          <Task className="task"
          data={group[1]}
          />
          </div>
        )
      }
    )
  }
  </div>
)
}
}

module.exports = Goal;
