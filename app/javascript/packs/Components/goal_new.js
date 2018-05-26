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
    this.state = {
       data: group_data
    }

    // (function() {
    //   group_data.forEach(function(task){
        // this.state = {}
        //
        // this.state = {
        //   ['task_' + task[1].id +'_completedAt']: task[1].completedAt || 'Incomplete'
        // }
      // }.bind(this)
    // )
  // };





  // debugger;

  this.update_completed = this.update_completed.bind(this)
  this.toggleTask = this.toggleTask.bind(this)


  // this.toggleTask()
};

update_completed(new_data) {


  debugger;
  // for(var index = 0; index <= this.state.data.length; index++) {
  //   if (this.state.data[index][1].id == data.id){
  //     debugger;
  //     this.state.data[index][1].completedAt = data.completedAt || 'Incomplete'
      this.setState(function(){
      return {
        data: new_data
      }

    }.bind(this));
      //   data[index][1].completedAt: data.completedAt || 'Incomplete'
      // })
      // return
    }
  // }
  //  this.state.data.forEach(function(item, index) {
  //    if (item[1].id == data.id){
  //      // console.log(item)
  //      // console.log(index)
  //      // this.setState({
  //      //   data[index].completedAt: data.completedAt || 'Incomplete'
  //      // })
  //
  //      this.state.data[index].completedAt = data.completedAt || 'Incomplete'
  //    }
  // }).bind(this)

  // this.setState({
  //   completedAt: data.completedAt || 'Incomplete'
  // })

// };

toggleTask(data) {
  console.log('clickevent')
  // debugger;
  axios.put('/dashboard/toggle_task', data, {"responseType": 'json' })
  .then(function (response) {
    // debugger;

    this.update_completed(response.data.data)
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
  // debugger;
  return (
    <div className="goals">
    { this.state.data.map(function(group){
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
        Completed At: {group[1].completedAt || "Incomplete"}
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
