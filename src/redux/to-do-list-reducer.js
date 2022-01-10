const ADD_NEW_TASK = 'ADD_NEW_TASK'
const DELETE_TASK = 'DELETE_TASK'
const UPDATE_TASK = 'UPDATE_TASK'
const ON_CHANGE = 'ON_CHANGE'

export let initalState = {
    tasks:[
    {id:1, description:"DO SMT"},
    {id:2, description:"DO SMT"},
    {id:3, description:"DO SMT"},
    {id:4, description:"DO SMT"},
    {id:5, description:"DO SMT"}
    ],
    taskCandidate: ""
}
export const toDoListReducer=(state=initalState, action) => {
    switch (action.type){
        case ADD_NEW_TASK:
            return{
                ...state,
                tasks: [...state.tasks, action.pyload],
                taskCandidate: ""
            }
        case DELETE_TASK:
            let tasks = state.tasks.filter(p => p.id != action.payload)
            for(let i =1; i <= tasks.length; i++){
                tasks[i-1].id = i;
            }
            return {...state, tasks: tasks}
        case UPDATE_TASK:

            break
        case ON_CHANGE:
           return {...state, taskCandidate: action.pyload}
        default:
            return state;
    }
    return state
}

export let addNewTask = (task) => {
    return {type: ADD_NEW_TASK, pyload: task}
}

export  let typingTask = (msg) => {
    return {type: ON_CHANGE, pyload: msg}
}

export let deleteTask = (id) => {
    return {type: DELETE_TASK, payload: id}
}

export let updateTask = (id, description) => {
    return {type: UPDATE_TASK, id, description}
}
export default toDoListReducer;