import React, { Component } from "react"
import './App.css';
import moment from "moment";
import axios from "axios";
import Header from './components/Header';
import AddTask from './components/AddTask';
import RemainingTasks from './components/RemainingTasks';
import TasksArea from './components/TasksArea';
import Footer from './components/Footer';

class App extends Component {

  state = {
    tasks: []
    //task_id | task_name  | due_by     | done | date_added | date_completed | owner_id
  };

  componentDidMount() {
    axios.get("https://xo0mntjodk.execute-api.eu-west-2.amazonaws.com/dev/tasks")
      .then((response) => {
        const tasksfromDB = response.data;
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
    const newTask = {
      task_name: taskText,
      done: 0,
      date_added: moment().format("YYYY-MM-DD"),
      date_completed: new Date(),
      due_by: dueByDate
    };

    axios.post("https://xo0mntjodk.execute-api.eu-west-2.amazonaws.com/dev/tasks", newTask)
      .then((response) => {
        const taskFromDB = response.data;

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
    const updatedTasks = this.state.tasks;
    let selectedTask = {};
    updatedTasks.forEach(task => {
      if (task.task_id === id) {
        task.done = 1;
        task.date_completed = new Date()
        selectedTask = task;
      }
    });
    axios.put(`https://xo0mntjodk.execute-api.eu-west-2.amazonaws.com/dev/tasks/${id}`, selectedTask)
      .then((response) => {
        this.setState({
          tasks: updatedTasks
        });
      })
      .catch((err) => {
        console.log("Error updating item", err)
      });
  }

  undoTask = id => {
    const updatedTasks = this.state.tasks;
    let selectedTask = {};
    updatedTasks.forEach(task => {
      if (task.task_id === id) {
        task.done = 0;
        selectedTask = task;
      }
    });
    axios.put(`https://xo0mntjodk.execute-api.eu-west-2.amazonaws.com/dev/tasks/${id}`, selectedTask)
      .then((response) => {
        this.setState({
          tasks: updatedTasks
        });
      })
      .catch((err) => {
        console.log(err)
      });
  }

  deleteTask = id => {
    axios.delete("https://xo0mntjodk.execute-api.eu-west-2.amazonaws.com/dev/tasks/" + id)
      .then((response) => {
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

    const completedTasks = this.state.tasks.filter(task => {
      return task.done;
    });
    const count = incompleteTasks.filter(item => item.done === 0).length

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
