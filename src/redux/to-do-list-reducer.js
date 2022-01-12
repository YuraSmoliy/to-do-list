const ADD_NEW_TASK = 'ADD_NEW_TASK'
const DELETE_TASK = 'DELETE_TASK'
const UPDATE_TASK = 'UPDATE_TASK'
const UPDATING_TASK = 'UPDATING_TASK'
const ON_CHANGE = 'ON_CHANGE'

export let initalState = {
    tasks:[
    {id:1, description:"DO SMT"},
    {id:2, description:"DO SMT"},
    {id:3, description:"DO SMT"},
    {id:4, description:"DO SMT"},
    {id:5, description:"DO SMT"}
    ],
    taskCandidate: "",
    taskForUpdate: ""
}
export const toDoListReducer=(state=initalState, action) => {
    switch (action.type){
        case ADD_NEW_TASK:
            return{
                ...state,
                tasks: [...state.tasks, action.payload],
                taskCandidate: "",
                taskForUpdate: ""
            }
        case DELETE_TASK:
            let tasks = state.tasks.filter(p => p.id !== action.payload)
            for(let i =1; i <= tasks.length; i++){
                tasks[i-1].id = i;
            }
            return {...state, tasks: tasks}
        case UPDATE_TASK:
            let updatedTasks = state.tasks.map(
                (p)=> {
                        if (p.id == action.id)
                        {console.log({id: action.id, description: action.description})
                            return {id: action.id, description: action.description}}
                        else
                            return p
                    }
                )
            console.log(updatedTasks)
            return {...state, tasks: updatedTasks, taskForUpdate: ""}
        case ON_CHANGE:
           return {...state, taskCandidate: action.payload}
        case UPDATING_TASK:
            return {...state, taskForUpdate: {id: action.id, description: action.description}}
        default:
            return state;
    }
}

export let addNewTask = (task) => {
    return {type: ADD_NEW_TASK, payload: task}
}

export  let typingTask = (msg) => {
    return {type: ON_CHANGE, payload: msg}
}

export let deleteTask = (id) => {
    return {type: DELETE_TASK, payload: id}
}

export let updateTask = (id, description) => {
    return {type: UPDATE_TASK, id: id, description: description}
}

export let updatingTask = (id, description) => {
    return {type: UPDATING_TASK, id: id, description: description}
}
export default toDoListReducer;