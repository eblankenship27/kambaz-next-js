import { Button, ListGroupItem } from "react-bootstrap";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

export default function TodoItem({ todo }: {
    todo: { id: string, title: string };
}) {
    const dispatch = useDispatch();
    return (
        <ListGroupItem key={todo.id}>
            <Button 
                onClick={() => dispatch(deleteTodo(todo.id))}  
                className="btn btn-danger" 
                id="wd-delete-todo-click"
            > 
                Delete
            </Button>
            <Button 
                onClick={() => dispatch(setTodo(todo))} 
                className="btn btn-primary" 
                id="wd-set-todo-click"
            > 
                Edit 
            </Button>
            {todo.title}
        </ListGroupItem>
    );
}