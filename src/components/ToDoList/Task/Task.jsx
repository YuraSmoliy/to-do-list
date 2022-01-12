import React from "react"
import classes from "./Task.module.css"

let Task = (props) => {

    let deleteTask = () =>{
        props.delete(props.id)
    }
    let updatingTask = () =>{
        props.updating(props.id, props.item)
    }

    return (
        <div className={classes.task}>
            <div className={classes.id}>{props.id}: </div>
            <div className={classes.description} onDoubleClick={updatingTask}>{props.item}</div>
            <button className={classes.deleteButton} onClick={deleteTask}> X </button>
        </div>
    )
}

export default Task