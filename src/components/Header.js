import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks, faDotCircle, faClipboardList, faClipboardCheck, faTrashAlt, faNotesMedical } from '@fortawesome/free-solid-svg-icons';

class Header extends React.Component {
    render () {
        return (
            <div>
                <h1>Task Manager <FontAwesomeIcon icon = {faClipboardList} /></h1>
                <h3>98 and 	&#190; percent</h3>
            </div>
        );
    }
}

export default Header;