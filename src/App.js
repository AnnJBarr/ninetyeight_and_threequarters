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
      { text: "Second item added, first item to be completed", id: uuid(), done: true, dateAdded: "2019-10-15", dateCompleted: "2019-10-18", dueBy: "2019-11-10" },
      { text: "Fifth item added, not yet complete", id: uuid(), done: false, dateAdded: "2019-10-23", dateCompleted: null, dueBy: "2019-11-15" },
      { text: "Third item added, not completed", id: uuid(), done: false, dateAdded: "2019-10-16", dateCompleted: null, dueBy: "2019-12-10" },
      { text: "Fourth item added, second item completed", id: uuid(), done: true, dateAdded: "2019-10-21", dateCompleted: "2019-10-25", dueBy: "2019-09-10" },
      { text: "First item added, third item completed", id: uuid(), done: true, dateAdded: "2019-09-28", dateCompleted: "2019-10-28", dueBy: "2019-12-31" },
      { text: "Sixth item added, still to be completed", id: uuid(), done: false, dateAdded: "2019-10-29", dateCompleted: null, dueBy: "2019-10-30" },

    ]
  }

  addNewTask = (taskText, dueByDate) => {
    const tasksCopy = this.state.tasks.slice();
    const newTask = {
      text: taskText,
      done: false,
      dateAdded: moment().format("YYYY-MM-DD"),
      dateCompleted: new Date(),
      dueBy: dueByDate,
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



  doneTask = id => {
    console.log("this is the id from doneTask " + id);
    const tasksCopy = this.state.tasks.slice();
    console.log(tasksCopy)

    //if (task.id===id){ task.completed = true}

    const updatedTasks = this.state.tasks.map(task => {
      if (task.id === id) {
      task.done = true;
        //console.log(updatedTasks)
      }
      return task;

    })

    this.setState({
      tasks: updatedTasks
    });
  }

  deleteTask = id => {
    //remove the task with the id in question from this.state.tasks
    console.log("the id is" + id);
    // filter to remove th task that we want to delete
    //      {text: "walk cat", completed: false, date: new Date("2019-10-23"), id: uuid()},
    //setState
    const remainingTasks = this.state.tasks.filter(task => {

      return task.id !== id
    });


    this.setState({
      tasks: remainingTasks
    })
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
        <TasksArea tasks={this.state.tasks} doneTaskFunc={this.doneTask} deleteTaskFunc={this.deleteTask} />
        <Footer />

      </div>
    );
  }
}
export default App;
