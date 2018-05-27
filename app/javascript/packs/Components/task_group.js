var React = require("react");
var CompletedImg = require("packs/assets/images/Completed.svg")
var LockedImg = require("packs/assets/images/Locked.svg")
var IncompleteImg = require("packs/assets/images/Incomplete.svg")

class TaskGroup extends React.Component {

  render() {
    return(
      <div className="task-group">
        <h2 className="col-xs-4 offset-xs-2">Task Group</h2>
        <ul>
          <li>
            <span className="icon"><img src={LockedImg}/></span>
            <span className="task-status">Locked Task</span>
          </li>
          <li>
            <span className="icon"><img src={IncompleteImg}/></span>
            <span className="task-status">Incomplete Task</span>
          </li>
          <li>
            <span className="icon"><img src={CompletedImg}/></span>
            <span className="task-status">Completed Task</span>
          </li>
        </ul>
      </div>
    )
  }
}

module.exports = TaskGroup;