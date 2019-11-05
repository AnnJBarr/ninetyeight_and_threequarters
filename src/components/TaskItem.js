import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDotCircle, faClipboardCheck, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import moment from "moment";

class TaskItem extends React.Component {

    doneTask = () => {
        const tasksCopy = this.state.tasks.slice();
        tasksCopy.completed = true

        this.setState({
            tasks: tasksCopy
        });
    }

    handleDoneClick = event => {
        console.log("the done button was clicked " + event)
        this.props.doneTaskFunc(this.props.id)

    }



    render() {

        return (
            <div className="row taskRow">
                <div className="col-1">
                    {this.props.done === true ? <div id="donedot"><FontAwesomeIcon icon={faDotCircle} /></div> : <div id="tododot"><FontAwesomeIcon icon={faDotCircle} /></div>}
                </div>

                <div className="col-6">
                    {this.props.done === true ? <div id="doneid">{this.props.text}</div> : <div>{this.props.text}</div>}
                </div>
                <div className="col-2">
                    <p>
                    {/* {this.props.date} */}
                    {moment(this.props.dateAdded).format("YYYY-MM-DD")}
                   </p>
                </div>
                <div className="col-2">
                    <p className={moment(this.props.dueBy, "YYYY-MM-DD").fromNow().includes("ago") ? "overdue" : ""}>
                        Due {moment(this.props.dueBy, "YYYY-MM-DD").fromNow()}
                        {/* {this.props.dueBy} */}
                        {/* {moment(this.props.dueBy).format("YYYY-MM-DD")}  */}
                    </p>
                </div>
                <div className="col-1 text-right">
                    {this.props.done === true ? <div id="doneid"></div> : <button id="icon-buttons" className="btn" onClick={this.handleDoneClick} ><FontAwesomeIcon icon={faClipboardCheck} /></button>}
                </div>
                <div className="col-1">
                    <button id="icon-buttons" className="btn" ><FontAwesomeIcon icon={faTrashAlt} /></button>
                </div>



            </div>

        );
    }
}

export default TaskItem;