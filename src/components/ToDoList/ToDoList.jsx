import React from "react"
import classes from "./ToDoList.module.css"
import Task from "./Task/Task";


let ToDoList = (props) => {
    let tasks = props.tasks.map((task)=>(
        <Task id={task.id} item={task.description} delete={props.deleteTask}/>
    ));

    function changeInputHandler(event) {
        props.changeMsg(event.target.value)
    }
    function addTask(event) {
        event.preventDefault()
        let id = props.tasks.length + 1
        props.addTask(id, props.taskCandidate)
    }

    return (
        <div className={classes.tasksContainer}>
            <div className={classes.tasks}>
                {tasks}
            </div>
            <form onSubmit={addTask} className={classes.form}>
                <label className={classes.enterTaskLabel}>Enter the next TASK:</label>
                    <input
                        type="textarea"
                        value={props.taskCandidate || ""}
                        onChange={changeInputHandler}
                        className={classes.addInput}
                    />
                <input type="submit" className={classes.addButton}/>
            </form>
        </div>
    )
}

export default ToDoList