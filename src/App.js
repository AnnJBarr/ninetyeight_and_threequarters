import React, { Component } from "react"
import './App.css';
import uuid from "uuid/v4";
import Header from './components/Header';
import AddTask from './components/AddTask';
import RemainingTasks from './components/RemainingTasks';
import TasksArea from './components/TasksArea';
import Footer from './components/Footer';


class App extends Component {

  state = {
    tasks: [
      {text: "Second item added, first item to be completed", done: true, dateAdded: new Date("2019-10-15"), dateCompleted: new Date("2019-10-18"), id: uuid()},
      {text: "Fifth item added, not yet complete", done: false, dateAdded: new Date("2019-10-23"), dateCompleted: null, id: uuid()},
      {text: "Third item added, not completed", done: false, dateAdded: new Date("2019-10-16"), dateCompleted: null, id: uuid()},
      {text: "Fourth item added, second item completed", done: true, dateAdded: new Date("2019-10-21"), dateCompleted: new Date("2019-10-25"),id: uuid()},
      {text: "First item added, third item completed", done: true, dateAdded: new Date("2019-09-28"), dateCompleted: new Date("2019-10-28"), id: uuid()},
      {text: "Sixth item added, still to be completed", done: false, dateAdded: new Date("2019-10-29"), dateCompleted: null, id: uuid()},

    ]
  }
  
  render () {
  return (
    <div className="container">
      <Header />
      <AddTask />
      <RemainingTasks count = {this.state.tasks.length}/>
      <TasksArea taskText={this.state.tasks.text} taskDone={this.state.tasks.done} taskAddedDate={this.state.tasks.dateAdded} taskDoneDate={this.state.tasks.dateCompleted} taskId={this.state.tasks.id}/>
      <Footer />

    </div>
  );
}
}
export default App;
