var React = require("react");
var Task = require("./task");
var GroupImg = require("packs/assets/images/Group.svg")
var TaskCount = require('./task_count')


// var Link = require("react-router-dom").Link; //to create an anchor

class Group extends React.Component {
  constructor(props) {
    super(props);

    // let all_tasks = this.props.data.all_groups
    // this.state = {
    //   completedCount: this.completedCount.bind(this),
    //   totalTasksCount: this.totalTasksCount.bind(this)
    // }
    // this.state.completedCount =

    this.state = {
      completedCount: this.completedCount.bind(this),
      totalTasksCount: this.totalTasksCount.bind(this),
      hideTask: true
    }
    this.drowdownToggle = this.drowdownToggle.bind(this);
  };

  completedCount(group, all_tasks) {
    let count = 0;
    all_tasks.forEach(function(item, index){
      if (item[1]['id'] === group && typeof(item[1]['completedAt']) === 'string') count++
    }.bind(this))
    return count;
  }

  totalTasksCount(group, all_tasks) {
    let count = 0;
    all_tasks.forEach(function(item, index){
      if (item[1]['id'] === group) count++
    }.bind(this))
    return count;
  }

  drowdownToggle(e){
    //show svg or down caret
    e.currentTarget.classList.contains('caret') ? e.currentTarget.classList.remove('caret') : e.currentTarget.classList.add('caret')
    parent = e.currentTarget.parentElement
    //show or hide the child task
    parent.querySelector('.tasks').style.display == '' ? parent.querySelector('.tasks').style.display = 'inline-block': parent.querySelector('.tasks').style.display = ''
  }


  render() {
    return (
      <div className="goals col-xs-4 col-xs-offset-2">
      <div className="header-container">
      <h1 className="headings">Things To Do</h1>


      </div>
      { this.props.data.all_groups.map(function(group){

        return(
          <div key={group[1].group_id} className="group-name">
            <img className='inline' onClick={this.drowdownToggle.bind(this)} src={GroupImg}/>
            <p className="inline col-xs-offset-1">{group[0]}</p>
            <TaskCount group={group[1]} all_tasks={this.props.data} data={group[1]} />
          </div>
        )
      }.bind(this)
    )
  }
  </div>
)
}
}

module.exports = Group;
