import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks } from '@fortawesome/free-solid-svg-icons';

class RemainingTasks extends React.Component {
    render() {
        return (
            <div className="row appRow d-none d-md-block">
                <div className="mx-auto col-12 col-lg-8">
                    <div className="card bg-transparent text-white">
                        <div className="card-body">
                            <h5 className="card-title">Open Tasks <FontAwesomeIcon icon={faTasks} /></h5>
                            <div className="card-text">You have {this.props.count} tasks to complete</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RemainingTasks;