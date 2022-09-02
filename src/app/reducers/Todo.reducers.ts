import { TodoActionType } from "../shared/enums/todo-action-types.enum";
import { ActionParent } from "../actions/todo.actions";
import { Todo } from "../models/Todo";

const initialState: Todo[]=[
    {title:"Title demo 1"}
   

];

export function TodoReducer(state = initialState, action : ActionParent)
{
    switch(action.type)
    {
        case TodoActionType.Add:
            return[...state,action.payload]

            case TodoActionType.Remove:
                [...state.splice(action.payload,1)]
                return [...state]
        default:
            return state;
    }
}