'use client'
import ArrayStateVariable from "./ArrayStateVariable";
import DateStateVariable from "./ateStateVariable";
import BooleanStateVariable from "./BooleanStateVariables";
import ClickEvent from "./ClickEvent";
import Counter from "./Counter";
import EventObject from "./EventObject";
import ObjectStateVariable from "./ObjectStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import ReduxExamples from "./ReduxExamples/page";
import StringStateVariables from "./StringStateVariables";
import store from "../store/page";
import { Provider } from "react-redux";
import TodoList from "./ReduxExamples/todos/TodoList";

export default function Lab4() {
    function sayHello() {
        alert("Hello");
    }
    return (
        <Provider store={store}>
            <div id="wd-passing-functions">
                <h2>Lab 4</h2>
                <ClickEvent />
                <PassingDataOnEvent />
                <PassingFunctions theFunction={sayHello} />
                <EventObject />
                <Counter />
                <BooleanStateVariable />
                <StringStateVariables />
                <DateStateVariable />
                <ObjectStateVariable />
                <ArrayStateVariable />
                <ParentStateComponent />
                <ReduxExamples />
                <TodoList />
            </div>
        </Provider>
    )
}