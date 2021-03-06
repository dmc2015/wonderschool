/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

// console.log('Hello World from Webpacker')



let React = require("react");
let ReactDom = require("react-dom");
// let Goal = require("./Components/goal.js");

let Group = require("./Components/group.js");
let TaskLegend = require("./Components/task_legend.js");

let group_data = gon

class App extends React.Component {
  render() {
    return (
      <div className="row">
        <Group data={group_data}/>
        <TaskLegend />
      </div>
    )
  }
}

module.exports = App;
