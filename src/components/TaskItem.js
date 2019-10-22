import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks, faDotCircle, faClipboardList, faClipboardCheck, faTrashAlt, faNotesMedical } from '@fortawesome/free-solid-svg-icons';

class TaskItem extends React.Component {
    render() {
        return (
            <div className="row taskRow">
                <div className="col-1">
                    {this.props.done === true ? <div id="donedot"><FontAwesomeIcon icon={faDotCircle} /></div> : <div id="tododot"><FontAwesomeIcon icon={faDotCircle} /></div>}
                </div>

                <div className="col-9">
                    {this.props.done === true ? <div id="doneid">{this.props.text}</div> : <div>{this.props.text}</div>}

                </div>
                <div className="col-1 text-right">
                    {this.props.done === true ? <div id="doneid"></div> : <div><FontAwesomeIcon icon={faClipboardCheck} /></div>}
                </div>
                <div className="col-1">
                    <FontAwesomeIcon icon={faTrashAlt} />
                </div>



            </div>

        );
    }
}

export default TaskItem;