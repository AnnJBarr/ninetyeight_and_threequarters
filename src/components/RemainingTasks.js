import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks, faDotCircle, faClipboardList, faClipboardCheck, faTrashAlt, faNotesMedical } from '@fortawesome/free-solid-svg-icons';

class RemainingTasks extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="mx-auto col-12 col-lg-8">
                    <div className="card bg-transparent text-white">
                        <div className="card-body">
                            <h5 className="card-title">Open Tasks <FontAwesomeIcon icon={faTasks} /></h5>
                            <p className="card-text">You have {this.props.count} tasks to complete</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RemainingTasks;