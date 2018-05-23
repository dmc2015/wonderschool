var React = require("react");
// var Link = require("react-router-dom").Link; //to create an anchor
var axios = require("axios");
class Task extends React.Component {
  constructor(props) {
    super(props);
    // debugger;
    // this.state = {
    //   data: props
    // };

  }

  handleClick = () =>{
    console.log('click event')

    axios.get('/dashboard/toggle_task', {responseType: 'json'})
    .then(function (response) {
      this.setState({events: response.data})
    })
    .catch(function (error) {
      console.log(error);
    });
  }



  render() {
    let dependency_count = this.props.data.dependencies.length
    let task = this.props.data.task
    return (
      <div className="tasks" onClick={this.handleClick}>
      <ul>
      <li>
      Task: {task}
      </li>
      <li>
      Number of Dependencies: {dependency_count}
      </li>
      </ul>
      </div>
    )
  }
}

module.exports = Task;
