import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks, faDotCircle, faClipboardList, faClipboardCheck, faTrashAlt, faNotesMedical } from '@fortawesome/free-solid-svg-icons';

class TaskItem extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-1" id="todo-dot">
                    <FontAwesomeIcon icon={faDotCircle} />
                </div>
                <div className="col-8 border">
                    {this.props.text}
                        </div>
                <div className="col-1 text-right">
                    <FontAwesomeIcon icon={faClipboardCheck} />
                </div>
                <div className="col-2">
                    <FontAwesomeIcon icon={faTrashAlt} />
                </div>
            </div>

        );
    }
}

export default TaskItem;