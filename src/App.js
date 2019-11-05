import React, { Component } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleDown, faClipboardList, faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import moment from "moment";
import uuid from "uuid/v4";
import Header from './components/Header';
import AddTask from './components/AddTask';
import RemainingTasks from './components/RemainingTasks';
import TasksArea from './components/TasksArea';
import Footer from './components/Footer';
import TaskItem from "./components/TaskItem";

class App extends Component {

  state = {
    tasks: [
      { text: "Second item added, first item to be completed", done: true, dateAdded: "2019-10-15", dateCompleted: "2019-10-18", dueBy: "2019-11-10", id: uuid() },
      { text: "Fifth item added, not yet complete", done: false, dateAdded: "2019-10-23", dateCompleted: null, dueBy: "2019-11-15", id: uuid() },
      { text: "Third item added, not completed", done: false, dateAdded: "2019-10-16", dateCompleted: null, dueBy: "2019-12-10", id: uuid() },
      { text: "Fourth item added, second item completed", done: true, dateAdded: "2019-10-21", dateCompleted: "2019-10-25", dueBy: "2019-09-10", id: uuid() },
      { text: "First item added, third item completed", done: true, dateAdded: "2019-09-28", dateCompleted: "2019-10-28", dueBy: "2019-12-31", id: uuid() },
      { text: "Sixth item added, still to be completed", done: false, dateAdded: "2019-10-29", dateCompleted: null, dueBy: "2019-10-30", id: uuid() },

    ]
  }

  addNewTask = (taskText) => {
    const tasksCopy = this.state.tasks.slice();
    const newTask = {
      text: taskText,
      done: false,
      dateAdded: moment().format("YYYY-MM-DD"),
      dateCompleted: new Date(),
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
    return tasks.map(task => {
      task.dateAdded = new Date(task.dateAdded);
      task.dueBy = new Date(task.dueBy);
      task.dateCompleted = new Date(task.dateCompleted);
      return task
    })
  }

  render() {
    const completedTasks = this.state.tasks.filter(task => {
      return task.done;
    });



    const dateSortedCompleted = completedTasks.sort((a, b) => b.dateCompleted - a.dateCompleted);
    //Completed listed most recent first

    const incompleteTasks = this.state.tasks.filter(task => {
      return task.done ? false : true
    });

    const incompleteWithDateObj = this.convertDates(incompleteTasks);

    const dateSortedIncomplete = incompleteWithDateObj.sort((a, b) => a.dateAdded - b.dateAdded);
    //most recent to bottom of list

    const count = incompleteTasks.filter(item => item.done === false).length


    return (
      <div className="container">
        <Header />
        <AddTask addNewTaskFunc={this.addNewTask} />
        <RemainingTasks count={count} />

        <div className="row mx-auto appRow">

          <div className="col-lg-2">

          </div>
          <div id="to-do-tasks" className=" col-12 col-lg-4">
            <div id="todo" className="card">
              <div className="card-header">
                <h5 className="card-title">Tasks to do <FontAwesomeIcon icon={faClipboardList} /></h5>
              </div>
              <div className="card-body">
                <div className="card-text" >
                  {dateSortedIncomplete.map(task => {
                    return <TaskItem doneTaskFunc={this.doneTask} text={task.text} done={task.done} key={task.id} />
                  })}
                </div>
                <button id="task-button" className="btn"><FontAwesomeIcon icon={faChevronCircleDown} /></button>
              </div>
            </div>

          </div>

          <div id="done-tasks" className=" col-12 col-lg-4">
            <div id="done" className="card">
              <div className="card-header">
                <h5 className="card-title">Completed <FontAwesomeIcon icon={faClipboardCheck} /></h5>
              </div>
              <div className="card-body">
                <div className="card-text">
                  {dateSortedCompleted.map(task => {
                    return <TaskItem text={task.text} done={task.done} key={task.id} />
                  })}
                </div>
                <button id="task-button" className="btn"><FontAwesomeIcon icon={faChevronCircleDown} /></button>
              </div>
            </div>
          </div>
          <div className="col-lg-2">

          </div>
        </div>






        <TasksArea tasks={this.state.tasks} />


        <Footer />

      </div>
    );
  }
}
export default App;
