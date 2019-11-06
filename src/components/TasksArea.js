import React from "react";
import './TasksArea.css';
import ToDoTasks from "./ToDoTasks";
import CompletedTasks from "./CompletedTasks";

class TasksArea extends React.Component {
    render() {
        const completedTasks = this.props.tasks.filter(t => {
            return t.done === true;
        });

        const incompleteTasks = this.props.tasks.filter(t => {
            return t.done === false;
        });
        return (
            <div className="row mx-auto appRow">
                <div id="to-do-tasks" className=" col-12 col-lg-6">
                    <ToDoTasks tasks={incompleteTasks} deleteTaskFunc={this.props.deleteTaskFunc} doneTaskFunc={this.props.doneTaskFunc} />
                </div>
                <div id="done-tasks" className=" col-12 col-lg-6">
                    <CompletedTasks tasks={completedTasks} deleteTaskFunc={this.props.deleteTaskFunc} />
                </div>
            </div>

        );
    }
}

export default TasksArea;