var React = require("react");
var Task = require("./task");
// var GroupImg = require("packs/assets/images/Group.svg");



class TaskCount extends React.Component {
  constructor(props) {
    super(props);



    // this.setState({
    //   completedCount: null,
    //   totalTasksCount: null,
    //   data: null,
    //   all_data: null
    // })

    this.state = {
      completedCount: '', //this.completedCount(group_id, structured_tasks),
      totalTasksCount: '', //this.totalTasksCount(group_id, all_tasks),
      data: this.props.data,
      all_data: this.props.all_tasks
    }

    this.completedCount = this.completedCount.bind(this)
    this.totalTasksCount = this.totalTasksCount.bind(this)
  }


  completedCount(group_id, all_tasks) {
    let count = 0;
    all_tasks.forEach(function(item, index){
      if (item['id'] === group_id && typeof(item['completedAt']) === 'string') count++
    }.bind(this))
    this.setState({completedCount: count});
    return count;
  }

  totalTasksCount(group, all_tasks) {
    let count = 0;
    all_tasks.forEach(function(item, index){
      if (item[1]['id'] === group) count++
    }.bind(this))
    this.setState({totalTasksCount: count});
    return count;
  }

  componentWillMount(){
    var group_id = parseInt(this.props.group.group_id);
    var all_tasks = this.props.all_tasks.all_groups;
    var specific_group = this.props.data.group;
    var structured_tasks = all_tasks.map(function(item) {return item[1] })

    this.totalTasksCount(group_id, all_tasks),
    this.completedCount(group_id, structured_tasks )
  }
  render() {
    return (
      <div>
      <span className="block task-count-margin"> {this.state.completedCount} of {this.state.totalTasksCount} Tasks Complete </span>
      <Task className="task" data={this.props.data} all_tasks={this.state.all_data} completedCount={this.completedCount}/>
      </div>
    )
  }
}

module.exports = TaskCount;
