import React from "react";
import TaskItem from './TaskItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons';

class CompletedTasks extends React.Component {
    render() {
        const tasks = this.props.tasks;
        const dateSortedCompleted = tasks.sort((a, b) => b.date_completed - a.date_completed);
        return (
            <div id="done" className="card">
                <div className="card-header">
                    <h5 className="card-title">Completed {this.props.doneCount > 0 ? <span>({this.props.doneCount})</span> : ""} <FontAwesomeIcon icon={faClipboardCheck} /></h5>
                </div>
                <div className="card-body">
                    <div className="card-text">
                        {dateSortedCompleted.map(task => {
                            return <TaskItem unDoTaskFunc={this.props.unDoTaskFunc} deleteTaskFunc={this.props.deleteTaskFunc} text={task.task_name} done={task.done} key={task.task_id} id={task.task_id} dateAdded={task.date_added} dateCompleted={task.date_completed} dueBy={task.due_by} />
                        })}
                    </div>
                </div>
            </div>

        );
    }
}

export default CompletedTasks;