import React from "react"
import classes from "./ToDoList.module.css"
import Task from "./Task/Task";


let ToDoList = (props) => {

    let tasks = props.tasks.map((task)=>(
        <Task id={task.id} item={task.description} delete={props.deleteTask} updating={props.updatingTask}/>
    ));

    function changeInputHandler(event) {
        if (props.taskForUpdate.id)
            props.updatingTask(props.taskForUpdate.id,event.target.value)
        else
            props.changeMsg(event.target.value)
    }
    function addTask(event) {
        event.preventDefault()
        let id = props.tasks.length + 1
        props.addTask(id, props.taskCandidate)
    }
    function modifyTasks(event){
        event.preventDefault()
        if (props.taskForUpdate.id)
        {console.log(props.taskForUpdate)
            return updateTask(props.taskForUpdate.id,props.taskForUpdate.description)}
        else
            return addTask(event)
    }
    function updateTask(id, description){
        props.updateTask(id, description)
    }

    let value =  props.taskForUpdate.description || props.taskCandidate

    return (
        <div className={classes.tasksContainer}>
            <div className={classes.tasks}>
                {tasks}
            </div>
            <form onSubmit={modifyTasks} className={classes.form}>
                <label className={classes.enterTaskLabel}>Enter the next TASK:</label>
                    <input
                        type="textarea"
                        value={value || "" }
                        onChange={changeInputHandler}
                        className={classes.addInput}
                    />
                <input type="submit" className={classes.addButton}/>
            </form>
        </div>
    )
}

export default ToDoList