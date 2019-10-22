import React from "react";
import './TasksArea.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleDown, faTasks, faDotCircle, faClipboardList, faClipboardCheck, faTrashAlt, faNotesMedical } from '@fortawesome/free-solid-svg-icons';
import ToDoTasks from "./ToDoTasks";
import CompletedTasks from "./CompletedTasks";

class TasksArea extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-lg-2">

                </div>
                <div id="to-do-tasks" className="mx-auto col-12 col-lg-4">
                    <ToDoTasks />
                </div>

                <div id="done-tasks" className="mx-auto col-12 col-lg-4">
                    <CompletedTasks />
                </div>
                <div className="col-lg-2">

                </div>
            </div>

        );
    }
}

export default TasksArea;