import React from "react";
import ToDoList from "./ToDoList";
import {addNewTask, deleteTask, typingTask, updateTask, modifyTask} from "../../redux/to-do-list-reducer";
import {compose} from "redux";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return { tasks: state.doList.tasks, taskCandidate: state.doList.taskCandidate, taskForUpdate: state.doList.taskForUpdate};
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
        },
        updateTask: (id, description) => {
            dispatch(updateTask(id,description))
        },
        updatingTask: (id, description) => {
            dispatch(modifyTask(id,description))
        }
    };
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
)
(ToDoList);