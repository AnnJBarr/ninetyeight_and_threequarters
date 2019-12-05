import React, { Component } from "react"
import './App.css';
import moment from "moment";
import axios from "axios";
import uuid from "uuid/v4";
import Header from './components/Header';
import AddTask from './components/AddTask';
import RemainingTasks from './components/RemainingTasks';
import TasksArea from './components/TasksArea';
import Footer from './components/Footer';

class App extends Component {

  state = {
    tasks: []
    // { text: "Second item added, first item to be completed", id: uuid(), done: true, dateAdded: "2019-10-15", dateCompleted: "2019-10-18", dueBy: "2019-11-10" },
    // { text: "Fifth item added, not yet complete", id: uuid(), done: false, dateAdded: "2019-10-23", dateCompleted: null, dueBy: "2019-11-15" },
    // { text: "Third item added, not completed", id: uuid(), done: false, dateAdded: "2019-10-16", dateCompleted: null, dueBy: "2019-12-10" },
    // { text: "Fourth item added, second item completed", id: uuid(), done: true, dateAdded: "2019-10-21", dateCompleted: "2019-10-25", dueBy: "2019-09-10" },
    // { text: "First item added, third item completed", id: uuid(), done: true, dateAdded: "2019-09-28", dateCompleted: "2019-10-28", dueBy: "2019-12-31" },
    // { text: "Sixth item added, still to be completed", id: uuid(), done: false, dateAdded: "2019-10-29", dateCompleted: null, dueBy: "2019-10-30" },
    //task_id | task_name  | due_by     | done | date_added | date_completed | owner_id
  };

  componentDidMount() {
    axios.get("https://xo0mntjodk.execute-api.eu-west-2.amazonaws.com/dev/tasks")
      .then((response) => {
        const tasksfromDB = response.data;
        console.log(tasksfromDB)
        this.setState({
          tasks: tasksfromDB
        })
      })
      .catch((err) => {
        console.log("Error getting task data", err);
      })
  }

  addNewTask = (taskText, dueByDate) => {
    const tasksCopy = this.state.tasks.slice();
    console.log("add new task called", tasksCopy)
    const newTask = {
      task_name: taskText,
      done: 0,
      date_added: moment().format("YYYY-MM-DD"),
      date_completed: new Date(),
      due_by: dueByDate
      // owner_id: 1 //FK in database so will need some mods
    };

    axios.post("https://xo0mntjodk.execute-api.eu-west-2.amazonaws.com/dev/tasks", newTask)
      .then((response) => {
        const taskFromDB = response.data;

        console.log(response)

        tasksCopy.push(taskFromDB);

        this.setState({
          tasks: tasksCopy
        });


      })
      .catch((err) => {
        console.log("Error creating task", err)

      })


  }

  doneTask = id => {
    axios.put("https://xo0mntjodk.execute-api.eu-west-2.amazonaws.com/dev/tasks/" + id)
      .then((response) => {
        console.log(response)
        console.log(id)
        const updatedTasks = this.state.tasks.map(task => {
          if (task.task_id === id) {
            task.done = 1;
            task.date_completed = new Date()
          }
          return task;
        })

        this.setState({
          tasks: updatedTasks
        });
      })
      .catch((err) => {
        console.log(err)
      })
  }

  undoTask = id => {
    
    const undoTasks = this.state.tasks.map(task => {
      if (task.task_id === id) {
        task.done = 0;
        task.date_completed = null;
      }
      return task;
    })

    this.setState({
      tasks: undoTasks
    });
  }

  deleteTask = id => {
    axios.delete("https://xo0mntjodk.execute-api.eu-west-2.amazonaws.com/dev/tasks/" + id)
      .then((response) => {
        console.log(response)
        const remainingTasks = this.state.tasks.filter(task => {
          return task.task_id !== id
        });

        this.setState({
          tasks: remainingTasks
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  convertDates = (tasks) => {
    return tasks.map(task => {
      task.date_added = new Date(task.date_added);
      task.due_by = new Date(task.due_by);
      task.date_completed = new Date(task.date_completed);
      return task
    })
  }

  render() {

    const incompleteTasks = this.state.tasks.filter(task => {
      return task.done ? 0 : 1
    });

    const incompleteWithDateObj = this.convertDates(incompleteTasks);

    const completedTasks = this.state.tasks.filter(task => {

      return task.done;
    });
    const completedWithDateObj = this.convertDates(completedTasks);

    // const count = incompleteWithDateObj.filter(item => item.done === false).length
    // const count = incompleteWithDateObj.filter(item => item.done === 0).length
    const count = incompleteTasks.filter(item => item.done === 0).length

    // const doneCount = completedWithDateObj.filter(item => item.done === true).length
    // const doneCount = completedWithDateObj.filter(item => item.done === 1).length
    const doneCount = completedTasks.filter(item => item.done === 1).length

    return (
      <div className="container">
        <Header />
        <AddTask addNewTaskFunc={this.addNewTask} />
        <RemainingTasks count={count} doneCount={doneCount} />
        <TasksArea tasks={this.state.tasks} doneTaskFunc={this.doneTask} unDoTaskFunc={this.undoTask} deleteTaskFunc={this.deleteTask} count={count} doneCount={doneCount} />
        <Footer />
      </div>
    );
  }
}
export default App;
