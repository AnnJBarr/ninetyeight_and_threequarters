import React, { Component } from "react"
import './App.css';
import uuid from "uuid/v4";
import Header from './components/Header';
import AddTask from './components/AddTask';
import RemainingTasks from './components/RemainingTasks';
import TasksArea from './components/TasksArea';
import Footer from './components/Footer';
import ToDoTasks from "./components/ToDoTasks";
import CompletedTasks from "./components/CompletedTasks";
import TaskItem from "./components/TaskItem";

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
  createCopy= () => {
  const tasksCopy = this.state.tasks.slice();
  console.log(tasksCopy);
  }


  doneTask = () => {
    const tasksCopy = this.state.tasks.slice();
    tasksCopy.done = true

    this.setState({
      tasks: tasksCopy
    });
  }

  render () {
    // const completedTasks=this.state.tasks.filter(task => {
    //   return task.completed;
    // });

    // const dateSortedCompleted = completedTasks.sort((a, b) => b.date - a.date);
    // console.log(dateSortedCompleted);
    // Completed listed most recent first

    const incompleteTasks=this.state.tasks.filter (task => {
      return task.completed ? false : true
    });


    const dateSortedIncomplete = incompleteTasks.sort((a, b) => a.dateAdded - b.dateAdded);
    //most recent to bottom of list

  return (
    <div className="container">
      <Header />
      <AddTask />
      <RemainingTasks count = {this.state.tasks.length}/>
      <TasksArea text={this.state.tasks.text} done={this.state.tasks.done} dateAdded={this.state.tasks.dateAdded} dateCompleted={this.state.tasks.dateCompleted} id={this.state.tasks.id}>
        <ToDoTasks text={this.props.text} done={this.props.done} dateAdded={this.props.dateAdded} dateCompleted={this.props.dateCompleted} id={this.props.id}>
          {/* <TaskItem text={this.props.text} done={this.props.done} dateAdded={this.props.dateAdded} dateCompleted={this.props.dateCompleted} id={this.props.id}/> */}
          {dateSortedIncomplete.map(task => {
          return <TaskItem doneTaskFunc={this.doneTask} text={task.text} done={task.done} key={task.id}/>
        })}
        </ToDoTasks>
        <CompletedTasks text={this.props.text} done={this.props.done} dateAdded={this.props.dateAdded} dateCompleted={this.props.dateCompleted} id={this.props.id}>
          <TaskItem text={this.props.text} done={this.props.done} dateAdded={this.props.dateAdded} dateCompleted={this.props.dateCompleted} id={this.props.id}/>
        </CompletedTasks>
      </TasksArea>
      <Footer />

    </div>
  );
}
}
export default App;
