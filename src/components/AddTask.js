import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks, faDotCircle, faClipboardList, faClipboardCheck, faTrashAlt, faNotesMedical } from '@fortawesome/free-solid-svg-icons';

class AddTask extends React.Component {
    render() {
        return (
            <div id="add-task" className="row">
                <div className="mx-auto col-12 col-lg-8">
                    <div className="card bg-transparent text-white">
                        <div className="card-body">
                            <h5 className="card-title">Add new task to do <FontAwesomeIcon icon={faNotesMedical} /></h5>
                            {/*<p className="card-text"> */}
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Enter your next task</span>
                                    </div>
                                    <textarea className="form-control" aria-label="With textarea"></textarea>
                                </div>
                            {/* </p> */}
                            <br />
                            <a href="#" className="btn btn-outline-light">Add task</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddTask;