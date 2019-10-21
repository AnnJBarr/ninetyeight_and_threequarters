import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleDown, faTasks, faDotCircle, faClipboardList, faClipboardCheck, faTrashAlt, faNotesMedical } from '@fortawesome/free-solid-svg-icons';

class CompletedTasks extends React.Component {
    render () {
        return (
            <div className="card">
                        <div className="card-header">
                            <h5 className="card-title">Completed <FontAwesomeIcon icon={faClipboardCheck} /></h5>
                        </div>
                        <div className="card-body">
                            <p className="card-text">
                                <div className="row">
                                    <div className="col-1" id="done-dot">
                                        <FontAwesomeIcon icon={faDotCircle} />
                                    </div>
                                    <div className="col-9 border">
                                        <del>This is the first completed item</del>
                                    </div>
                                    <div className="col-2">
                                        <FontAwesomeIcon icon={faTrashAlt} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-1" id="done-dot">
                                        <FontAwesomeIcon icon={faDotCircle} />
                                    </div>
                                    <div className="col-9 border">
                                        <del>This is the second item on the completed list, which is long so I need the text to wrap</del>
                                    </div>
                                    <div className="col-2">
                                        <FontAwesomeIcon icon={faTrashAlt} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-1" id="done-dot">
                                        <FontAwesomeIcon icon={faDotCircle} />
                                    </div>
                                    <div className="col-9 border">
                                        <del>Third item on the complete list</del>
                                    </div>
                                    <div className="col-2">
                                        <FontAwesomeIcon icon={faTrashAlt} />
                                    </div>
                                </div>
                            </p>
                            <a href="#" id="task-button" className="btn"><FontAwesomeIcon icon={faChevronCircleDown} /></a>
                        </div>
                    </div>
            
        );
    }
}

export default CompletedTasks;