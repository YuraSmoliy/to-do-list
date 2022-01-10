import React from "react";
import ToDoList from "./ToDoList";
import {addNewTask, deleteTask, typingTask} from "../../redux/to-do-list-reducer";
import {compose} from "redux";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return { tasks: state.doList.tasks, taskCandidate: state.doList.taskCandidate};
};
let mapDispatchToProps = (dispatch) => {
    return {
        addTask: (id, task) => {
            let elem = {id: id, description: task}
            dispatch(addNewTask(elem));
        },
        changeMsg: (msg) =>{
            dispatch(typingTask(msg))
        },
        deleteTask: (id) => {
            dispatch(deleteTask(id))
        }
    };
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
)
(ToDoList);