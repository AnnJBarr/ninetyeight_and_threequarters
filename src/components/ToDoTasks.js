import React from "react";
import TaskItem from './TaskItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';

class ToDoTasks extends React.Component {
    render() {
        const tasks = this.props.tasks;
        const dateSortedIncomplete = tasks.sort((a, b) => a.date_added - b.date_added);

        return (
            <div id="todo" className="card">
                <div className="card-header">
                    <h5 className="card-title">Tasks to do {this.props.count > 0 ? <span>({this.props.count})</span> : ""} <FontAwesomeIcon icon={faClipboardList} /></h5>
                </div>
                <div className="card-body">
                    <div className="card-text" >
                        {dateSortedIncomplete.map(task => {
                            return <TaskItem doneTaskFunc={this.props.doneTaskFunc} deleteTaskFunc={this.props.deleteTaskFunc} text={task.task_name} done={task.done} key={task.task_id} id={task.task_id} dateAdded={task.date_added} dateCompleted={task.date_completed} dueBy={task.due_by} />
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default ToDoTasks;