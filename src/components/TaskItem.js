import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDotCircle, faClipboardCheck, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import moment from "moment";

class TaskItem extends React.Component {

    doneTask = () => {
        const tasksCopy = this.state.tasks.slice();
        tasksCopy.done = true

        this.setState({
            tasks: tasksCopy
        });
    }

    handleDoneClick = () => {
        this.props.doneTaskFunc(this.props.id)
    }

    handleDelete = () => {
        this.props.deleteTaskFunc(this.props.id);
    }


    render() {

        return (
            <div className="row taskRow">
                <div className="col-1">
                    {this.props.done === true ? <div id="donedot"><FontAwesomeIcon icon={faDotCircle} /></div> : <div id="tododot"><FontAwesomeIcon icon={faDotCircle} /></div>}
                </div>

                <div className="col-7 col-lg-6">
                    {this.props.done === true ? <div id="doneid"><h6>{this.props.text}</h6></div> : <div><h6>{this.props.text}</h6></div>}
                </div>
                <div className="col-4 col-lg-3">
                    {this.props.done === true ? <div id="doneid"><h6>
                        Done {moment(this.props.dateCompleted, "YYYY-MM-DD").fromNow()}
                    </h6></div> : <h6 className={moment(this.props.dueBy, "YYYY-MM-DD").fromNow().includes("ago") ? "overdue" : ""}>
                            Due {moment(this.props.dueBy, "YYYY-MM-DD").fromNow()}
                        </h6>}
                </div>
                <div className="col-1">
                    {this.props.done === true ? <div id="doneid"></div> : <button id="icon-buttons" className="btn" onClick={this.handleDoneClick} disabled={this.props.done}><FontAwesomeIcon icon={faClipboardCheck} /></button>}
                </div>
                <div className="col-1">
                    <button id="icon-buttons" className="btn" onClick={this.handleDelete} ><FontAwesomeIcon icon={faTrashAlt} /></button>
                </div>



            </div>

        );
    }
}

export default TaskItem;