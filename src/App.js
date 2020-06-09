import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {increment, decrement, login} from "./actions";


function App() {
    const counter = useSelector(state => state.counter);
    const isLogged = useSelector(state => state.isLogged);
    const dispatch = useDispatch();
    return (
        <div className="App">
            <h1>Counter {counter}</h1>
            <button
                onClick={() => {
                    dispatch(increment())
                }}
            >+
            </button>
            <button
                onClick={() => {
                    dispatch(decrement())
                }}
            >-
            </button>
            <hr/>
            <button
                onClick={() => {
                    dispatch(increment(5))
                }}
            >+5
            </button>
            <button
                onClick={() => {
                    dispatch(decrement(5))
                }}
            >-5
            </button>
            <hr/>
            <button
                onClick={() => {
                    dispatch(login())
                }}
            >Loggin/loggout
            </button>
                {
                    isLogged &&
                    <h3>Valuable information I Shouldn't see</h3>
                }

        </div>
);
}

export default App;
