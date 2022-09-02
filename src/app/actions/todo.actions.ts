import { Action } from "@ngrx/store"; 
import { types } from "util";
import { TodoActionType } from "../shared/enums/todo-action-types.enum";


export class ActionParent implements Action
{
    type:any;
    payload: any;
}

export class TodoAdd implements ActionParent
{
    type: TodoActionType.Add;
    constructor(public payload :any)
    {

    }

}