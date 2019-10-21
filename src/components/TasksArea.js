import React from "react";
import TaskItem from './TaskItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleDown, faTasks, faDotCircle, faClipboardList, faClipboardCheck, faTrashAlt, faNotesMedical } from '@fortawesome/free-solid-svg-icons';
import ToDoTasks from "./ToDoTasks";
import CompletedTasks from "./CompletedTasks";

class TasksArea extends React.Component {
    render() {
        return (
            <div id="tasks-area" className="row">
                <div className="col-lg-2">

                </div>
                <div className="col-12 col-lg-4 mx-auto">
                    <ToDoTasks />
                </div>

                <div className="col-12 col-lg-4 mx-auto">
                    <CompletedTasks />
                </div>
                <div className="col-lg-2">

                </div>
            </div>
            
            //<div>
            //     This is my task areas

            //     <CompletedTasks />

            //</div>

        );
    }
}

export default TasksArea;