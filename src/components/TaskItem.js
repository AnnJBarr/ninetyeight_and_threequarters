import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks, faDotCircle, faClipboardList, faClipboardCheck, faTrashAlt, faNotesMedical } from '@fortawesome/free-solid-svg-icons';

class TaskItem extends React.Component {
    render() {
        return (
            <div className="row">
                    <div className="col-1">
                        {this.props.done === true ? <p id="donedot"><FontAwesomeIcon icon={faDotCircle} /></p> : <p id="tododot"><FontAwesomeIcon icon={faDotCircle} /></p>}
                    </div>
                   
                    <div className="col-8 border">
                        {this.props.done === true ? <p id="doneid">{this.props.text}</p> : <p>{this.props.text}</p>}
                        
                    </div>
                    <div className="col-1 text-right">
                    {this.props.done === true ? <p id="doneid"> </p> : <p><FontAwesomeIcon icon={faClipboardCheck} /></p>}
                    </div>
                    <div className="col-1">
                        <FontAwesomeIcon icon={faTrashAlt} />
                    </div>

                
                
            </div>

        );
    }
}

export default TaskItem;