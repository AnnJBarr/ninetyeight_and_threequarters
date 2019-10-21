import React from "react";
import TaskItem from './TaskItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks, faDotCircle, faClipboardList, faClipboardCheck, faTrashAlt, faNotesMedical } from '@fortawesome/free-solid-svg-icons';
import ToDoTasks from "./ToDoTasks";
import CompletedTasks from "./CompletedTasks";

class TasksArea extends React.Component {
    render() {
        return (
            <div>
                This is my task areas
                <ToDoTasks />
                <CompletedTasks />
                
            </div>

        );
    }
}

export default TasksArea;