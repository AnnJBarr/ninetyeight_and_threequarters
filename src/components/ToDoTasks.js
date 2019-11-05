import React from "react";
import TaskItem from './TaskItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleDown, faClipboardList } from '@fortawesome/free-solid-svg-icons';

class ToDoTasks extends React.Component {
    render() {
        const tasks = this.props.tasks;
        const dateSortedIncomplete = tasks.sort((a, b) => a.dateAdded - b.dateAdded);

        return (
            <div id="todo" className="card">
                <div className="card-header">
                    <h5 className="card-title">Tasks to do <FontAwesomeIcon icon={faClipboardList} /></h5>
                </div>
                <div className="card-body">
                    <div className="card-text" >
                        {dateSortedIncomplete.map(task => {
                            return <TaskItem doneTaskFunc={this.doneTask} text={task.text} done={task.done} key={task.id} dateAdded={task.dateAdded} dateCompleted={task.dateCompleted} dueBy={task.dueBy} />
                        })}
                    </div>
                    <button id="task-button" className="btn"><FontAwesomeIcon icon={faChevronCircleDown} /></button>
                </div>
            </div>


            

        );
    }
}

export default ToDoTasks;