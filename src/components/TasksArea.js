import React from "react";
import './TasksArea.css';
import ToDoTasks from "./ToDoTasks";
import CompletedTasks from "./CompletedTasks";

class TasksArea extends React.Component {
    render() {
        return (
            <div className="row mx-auto appRow">
                <div className="col-lg-2">

                </div>
                <div id="to-do-tasks" className=" col-12 col-lg-4">
                    <ToDoTasks />
                </div>

                <div id="done-tasks" className=" col-12 col-lg-4">
                    <CompletedTasks />
                </div>
                <div className="col-lg-2">

                </div>
            </div>

        );
    }
}

export default TasksArea;