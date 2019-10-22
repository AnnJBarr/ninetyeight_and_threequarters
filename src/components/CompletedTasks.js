import React from "react";
import TaskItem from './TaskItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleDown, faTasks, faDotCircle, faClipboardList, faClipboardCheck, faTrashAlt, faNotesMedical } from '@fortawesome/free-solid-svg-icons';

class CompletedTasks extends React.Component {
    render() {
        return (
            <div id="done" className="card">
                <div className="card-header">
                    <h5 className="card-title">Completed <FontAwesomeIcon icon={faClipboardCheck} /></h5>
                </div>
                <div className="card-body">
                    <div className="card-text">
                        <TaskItem text="This is the first completed item" done={true} />
                        <TaskItem text="This is the second item on the completed list, which is long so I need the text to wrap" done={true} />
                        <TaskItem text="Third item on the complete list" done={true} />
                    </div>
                    <a href="#" id="task-button" className="btn"><FontAwesomeIcon icon={faChevronCircleDown} /></a>
                </div>
            </div>

        );
    }
}

export default CompletedTasks;