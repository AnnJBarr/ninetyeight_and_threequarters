import React from "react";
import TaskItem from './TaskItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleDown, faTasks, faDotCircle, faClipboardList, faClipboardCheck, faTrashAlt, faNotesMedical } from '@fortawesome/free-solid-svg-icons';

class ToDoTasks extends React.Component {
    render() {
        return (
            <div id="todo" className="card">
                <div className="card-header">
                    <h5 className="card-title">Tasks to do <FontAwesomeIcon icon={faClipboardList} /></h5>
                </div>
                <div  className="card-body">
                    <p className="card-text" >
                        <TaskItem text="This is the first item on the to do list" done={false}/>
                        <TaskItem text="This is the second item on the to do list, which is long so I need the text to wrap"  done={false}/>
                        <TaskItem text="Third item on the to do list" done={false} />
                    </p>
                    <a href="#" id="task-button" className="btn"><FontAwesomeIcon icon={faChevronCircleDown} /></a>
                </div>
            </div>

        );
    }
}

export default ToDoTasks;