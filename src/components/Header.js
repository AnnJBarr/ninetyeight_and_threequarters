import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks, faDotCircle, faClipboardList, faClipboardCheck, faTrashAlt, faNotesMedical } from '@fortawesome/free-solid-svg-icons';

class Header extends React.Component {
    render () {
        return (
            <div className="text-white text-center">
                <h1>Task Manager <FontAwesomeIcon icon = {faClipboardList} /></h1>
                <h5>98 and 	&#190; &#160;percent</h5>
            </div>
        );
    }
}

export default Header;