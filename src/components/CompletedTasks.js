import React from "react";
import TaskItem from './TaskItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleDown, faClipboardCheck } from '@fortawesome/free-solid-svg-icons';

class CompletedTasks extends React.Component {
    render() {
        const tasks = this.props.tasks;
        const dateSortedCompleted = tasks.sort((a, b) => b.dateCompleted - a.dateCompleted);

        return (
            <div id="done" className="card">
                <div className="card-header">
                    <h5 className="card-title">Completed <FontAwesomeIcon icon={faClipboardCheck} /></h5>
                </div>
                <div className="card-body">
                    <div className="card-text">
                    {/* { text: "Second item added, first item to be completed", done: true, dateAdded: "2019-10-15", dateCompleted: "2019-10-18", dueBy: "2019-11-10", id: uuid(), date: "2019-05-03" }                       */}
                        {dateSortedCompleted.map(task => {
                            return <TaskItem doneTaskFunc={this.props.doneTask} deleteTaskFunc={this.props.deleteTask} text={task.text} done={task.done} key={task.id} id={task.id} dateAdded={task.dateAdded} dateCompleted={task.dateCompleted} dueBy={task.dueBy} />
                        })}
                    </div>
                    <button id="task-button" className="btn"><FontAwesomeIcon icon={faChevronCircleDown} /></button>
                </div>
            </div>

        );
    }
}

export default CompletedTasks;