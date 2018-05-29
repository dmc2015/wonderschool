var React = require("react");
var CompletedImg = require("packs/assets/images/Completed.svg")
var LockedImg = require("packs/assets/images/Locked.svg")
var IncompleteImg = require("packs/assets/images/Incomplete.svg")

class TaskLegend extends React.Component {
  constructor(props){
    super(props)
    this.toggleDropdowns = this.toggleDropdowns.bind(this)
  };



  toggleDropdowns(){

  }


  render() {
    return(

      <div className="task-group col-xs-4">
      <div className="header-container">
      <h1 className="headings">Task Group</h1>
      <h3 className="col-xs-offset-6 headings all-groups" href="#" onClick={this.toggleDropdowns.bind(this)}>ALL GROUPS</h3>
      </div>
      <ul className="ul-legend">

      <li className="list-lock">
      <span className="icon"><img src={LockedImg}/></span>
      <span className="task-status">Locked Task</span>
      </li>
      <li>
      <span className="icon"><img src={IncompleteImg}/></span>
      <span className="task-status">Incomplete Task</span>
      </li>
      <li className="list-completed">
      <span className="icon"><img src={CompletedImg}/></span>
      <span className="task-status">Completed Task</span>
      </li>
      </ul>
      </div>
    )
  }
}

module.exports = TaskLegend;
