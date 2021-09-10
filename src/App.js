// npm i redux react-redux
// wrapping by Provider all APP in index.js import {Provider} from "react-redux";
// store.subscribe(() => console.log(store.getState()));
// store.dispatch(increment());
import {useSelector} from "react-redux";
import './App.css';
import {createStore} from "redux";
import {allReducers} from "./reducers/reducers";
import {Calculations} from "./calculations/Calculations";
import {BrowserRouter as Router } from 'react-router-dom';


export const initialStore = {
    summary : 0,
    other: 0,
}

export const store = createStore(
    allReducers,
    {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
store.subscribe(() => {
    localStorage['redux-store'] = JSON.stringify(store.getState())
})
console.log('store', store.getState())
function App() {
    // the same approach if you want to check Redux store
    // const globalState = useSelector(state => state)
    // console.log('globalState', globalState)
    return (
        <div className="App">
            <Router>
                <Calculations />
            </Router>
        </div>
    );
}

export default App;
