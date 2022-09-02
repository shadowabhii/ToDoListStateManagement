import { Action } from "@ngrx/store"; 
import { Todo } from "../models/Todo";
import { TodoActionType } from "../shared/enums/todo-action-types.enum";


export class ActionParent implements Action
{
    type:any;
    payload: any;
}

export class TodoAdd implements ActionParent
{
    type = TodoActionType.Add;
    constructor(public payload :any)
    {

    }

}

export class TodoRemove implements ActionParent
{
    type=TodoActionType.Remove;
    constructor(public payload : any){}
}