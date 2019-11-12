import React from "react";
import TaskItem from './TaskItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons';

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
                        {dateSortedCompleted.map(task => {
                            return <TaskItem unDoTaskFunc={this.props.unDoTaskFunc} deleteTaskFunc={this.props.deleteTaskFunc} text={task.text} done={task.done} key={task.id} id={task.id} dateAdded={task.dateAdded} dateCompleted={task.dateCompleted} dueBy={task.dueBy} />
                        })}
                    </div>
                </div>
            </div>

        );
    }
}

export default CompletedTasks;