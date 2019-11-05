import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNotesMedical } from '@fortawesome/free-solid-svg-icons';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


class AddTask extends React.Component {

    constructor(props, context) {
        super(props, context);

        // Initial state with date
        this.state = {
            // or Date or Moment.js
            newItemText: "",
            selectedDate: moment().format("YYYY-MM-DD")
        };

        // This binding is necessary to make `this` work in the callback
        this.onChange = this.onChange.bind(this);
    }
    //Functions which update state must always live where the state lives
    updateNewItemText = (event) => {
        console.log(event.target.value)
        // this function should update the state whenever someone types
        this.setState({
            newItemText: event.target.value,
        })
    }

    //Intermediary function

    handleClick = (event) => {
        event.preventDefault();
        this.props.addNewTaskFunc(this.state.newItemText, this.state.selectedDate);
        this.setState({
            newItemText: ""
        });
    }


    onChange(date) {
        console.log('this happens when onChange is called' + date)
        const formattedDate = moment(date).format("YYYY-MM-DD")
        console.log(formattedDate)
        this.setState({
            selectedDate: moment(date).format("YYYY-MM-DD")

        });

    }
    handleDateChange = e => {
        console.log(e)
        console.log(moment(e).format("YYYY-MM-DD"))
        console.log('this is what happens when I selected date ' + e)
        this.setState({
            selectedDate: moment(e).format("YYYY-MM-DD")
        });
    }

    handleInfiniteDateChange = e => {
        console.log(e)
        console.log(moment(e).format("YYYY-MM-DD"))
        console.log('this is what happens when I selected date Infinite date' + e)
        this.setState({
            selectedDate: moment(e).format("YYYY-MM-DD")
        });
    }

    onSelect = (date) => {
        console.log('this is the output of onSelect ' + date)
        this.setState({
            dateSelected: this.props.onSelect
        });
    }


    render() {
        return (
            <div id="add-task" className="row appRow">
                <div className="mx-auto col-12 col-lg-8">
                    <div className="card bg-transparent text-white">
                        <div className="card-body">
                            <h5 className="card-title">Add new task to do <FontAwesomeIcon icon={faNotesMedical} /></h5>
                            <div className="card-text">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">Enter your next task</span>
                                            </div>
                                            <textarea className="form-control"
                                                aria-label="With textarea"
                                                type="text"
                                                id="newItem"
                                                placeholder="Type an item here (max 160 characters)"
                                                value={this.state.newItemText}
                                                onChange={this.updateNewItemText}></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-4">
                                        <br />
                                        <br />
                                        Due by (please select)
                                    </div>
                                    <div className="col-6">
                                        <InfiniteCalendar className="form-control"
                                            theme={{
                                                selectionColor: 'rgb(128, 0, 128)',
                                                textColor: {
                                                    default: '#333',
                                                    active: '#FFF'
                                                },
                                                weekdayColor: 'rgb(146, 118, 255)',
                                                headerColor: 'rgb(128, 0, 128)',
                                                floatingNav: {
                                                    background: 'rgba(128, 0, 128, 0.96)',
                                                    color: '#FFF',
                                                    chevron: '#FFA726'
                                                }
                                            }}
                                            displayOptions={{
                                                layout: 'portrait',
                                                showHeader: true,
                                                shouldHeaderAnimate: false,
                                                showWeekdays: false
                                            }}
                                            width={(window.innerWidth <= 300) ? window.innerWidth : 300}
                                            height={window.innerHeight - 730}
                                            rowHeight={32}
                                            minDate={new Date()}
                                            onSelect={this.handleInfiniteDateChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-outline-light" onClick={this.handleClick} disabled={this.state.newItemText.length === 0 || this.state.newItemText.length > 160}>Add task</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        );
    }
}

export default AddTask;