const ADD_NEW_TASK = 'ADD_NEW_TASK'
const DELETE_TASK = 'DELETE_TASK'
const UPDATE_TASK = 'UPDATE_TASK'
const MODIFY_TASK = 'MODIFY_TASK'
const TYPING = 'TYPING'

export let initialState = {
    tasks:[
    {id:1, description:"Do something amazing"},
    {id:2, description:"Do something amazing"},
    {id:3, description:"Do something amazing"},
    {id:4, description:"Do something amazing"},
    {id:5, description:"Do something amazing"}
    ],
    taskCandidate: "",
    taskForUpdate: ""
}
export const toDoListReducer=(state=initialState, action) => {
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
                            return {id: action.id, description: action.description}
                        else
                            return p
                    }
                )
            return {...state, tasks: updatedTasks, taskForUpdate: ""}
        case TYPING:
           return {...state, taskCandidate: action.payload}
        case MODIFY_TASK:
            return {...state, taskForUpdate: {id: action.id, description: action.description}}
        default:
            return state;
    }
}

export let addNewTask = (task) => {
    return {type: ADD_NEW_TASK, payload: task}
}

export  let typingTask = (msg) => {
    return {type: TYPING, payload: msg}
}

export let deleteTask = (id) => {
    return {type: DELETE_TASK, payload: id}
}

export let updateTask = (id, description) => {
    return {type: UPDATE_TASK, id: id, description: description}
}

export let modifyTask = (id, description) => {
    return {type: MODIFY_TASK, id: id, description: description}
}
export default toDoListReducer;