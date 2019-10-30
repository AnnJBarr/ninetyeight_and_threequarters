import React from "react";
import TaskItem from './TaskItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleDown, faClipboardList } from '@fortawesome/free-solid-svg-icons';

class ToDoTasks extends React.Component {
    render() {

        // const completedTasks=this.props.filter(task => {
        //     return this.props.done;
        //   });
      
        //   const dateSortedCompleted = completedTasks.sort((a, b) => b.addedDate - a.addedDate);
        //   console.log(dateSortedCompleted);
        return (
            <div id="todo" className="card">
                <div className="card-header">
                    <h5 className="card-title">Tasks to do <FontAwesomeIcon icon={faClipboardList} /></h5>
                </div>
                <div  className="card-body">
                    <div className="card-text" >
                    {/* <ToDoTasks areaText={this.props.taskText} areaAdded={this.props.taskAddedDate} areaDone={this.props.taskDone} areaDoneDate={this.props.taskDoneDate}/> */}

                    <TaskItem text={this.props.areaText} done={this.props.areaDone} addedDate={this.props.areaAdded} doneDate={this.props.areaDoneDate} key={this.props.areaId} />
                    {/* {dateSortedCompleted.map(task => { */}
          
                        {/* <TaskItem text="This is the first item on the to do list" done={false}/>
                        <TaskItem text="This is the second item on the to do list, which is long so I need the text to wrap"  done={false}/>
                        <TaskItem text="Third item on the to do list" done={true} /> */}
                    </div>
                    <button id="task-button" className="btn"><FontAwesomeIcon icon={faChevronCircleDown} /></button>
                </div>
            </div>

        );
    }
}

export default ToDoTasks;