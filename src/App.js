import React, { Component } from "react"
import './App.css';
import moment from "moment";
import uuid from "uuid/v4";
import Header from './components/Header';
import AddTask from './components/AddTask';
import RemainingTasks from './components/RemainingTasks';
import TasksArea from './components/TasksArea';
import Footer from './components/Footer';

class App extends Component {

  state = {
    tasks: [
      { text: "Second item added, first item to be completed", done: true, dateAdded: "2019-10-15", dateCompleted: "2019-10-18", dueBy: "2019-11-10", id: uuid(), date: "2019-05-03" },
      { text: "Fifth item added, not yet complete", done: false, dateAdded: "2019-10-23", dateCompleted: null, dueBy: "2019-11-15", id: uuid(), date: "2019-05-04" },
      { text: "Third item added, not completed", done: false, dateAdded: "2019-10-16", dateCompleted: null, dueBy: "2019-12-10", id: uuid(), date: "2019-05-05" },
      { text: "Fourth item added, second item completed", done: true, dateAdded: "2019-10-21", dateCompleted: "2019-10-25", dueBy: "2019-09-10", id: uuid(), date: "2019-05-06" },
      { text: "First item added, third item completed", done: true, dateAdded: "2019-09-28", dateCompleted: "2019-10-28", dueBy: "2019-12-31", id: uuid(), date: "2019-05-07" },
      { text: "Sixth item added, still to be completed", done: false, dateAdded: "2019-10-29", dateCompleted: null, dueBy: "2019-10-30", id: uuid(), date: "2019-05-08" },

    ]
  }

  addNewTask = (taskText) => {
    const tasksCopy = this.state.tasks.slice();
    const newTask = {
      text: taskText,
      done: false,
      dateAdded: moment().format("YYYY-MM-DD"),
      dateCompleted: new Date(),
      dueBy: new Date(),
      id: uuid()
    };

    tasksCopy.push(newTask);

    this.setState({
      tasks: tasksCopy
    });
  }

  createCopy = () => {
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


  convertDates = (tasks) => {
    console.log('convertDates called')
    console.log(tasks)
    return tasks.map(task => {
      task.dateAdded = new Date(task.dateAdded);
      task.dueBy = new Date(task.dueBy);
      task.dateCompleted = new Date(task.dateCompleted);
      return task
    })
    
  }

  render() {
    
    const incompleteTasks = this.state.tasks.filter(task => {
      return task.done ? false : true
    });

    const incompleteWithDateObj = this.convertDates(incompleteTasks);

    const count = incompleteWithDateObj.filter(item => item.done === false).length

    

    return (
      <div className="container">
        <Header />
        <AddTask addNewTaskFunc={this.addNewTask} />
        <RemainingTasks count={count} />
        <TasksArea tasks={this.state.tasks} doneTaskFunc={this.doneTask} />
        <Footer />

      </div>
    );
  }
}
export default App;
