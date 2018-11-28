import React from "react";
import Counter from "./counter.jsx";
import Hello from "./test.jsx";
import { createStore } from "redux";
import { Provider } from "react-redux";

import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom'


const initialState = {
    count: 0
}

function reducer(state = initialState, action) {
    console.log("1",action.type)
    //console.log("2",action)
    switch (action.type) {
        case "INCREMENT":
            return {
                count: state.count + 1
            }
        case "DECREMENT":
            return {
                count: state.count - 1
            }
        default:
            return state
    }
}

const store = createStore(reducer);
//store.dispatch({type: "INCREMENT"}) 
//store.dispatch({type: "DECREMENT"})



export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="root">
                        <Switch>
                            <Route path="/counter" component={Counter}></Route>
                            <Route path="/test" component={Hello}></Route>
                           
                        </Switch>
                    </div>
                </Router>

            </Provider>
        )
    }

}

//const App = () => (
//    <Provider store={store}>
//        <Counter />
//    </Provider>
//)

//export default App