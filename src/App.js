import React from 'react';
import {Route} from "react-router-dom";
import './App.scss';
import {Homepage} from "./pages/homepage/homepage.component";

const HatsPage = (props) => {
    console.log(props);
    return (<div>
        <button onClick={() => props.history.push('/')}>Go back</button>
        <h1>HATS PAGE</h1>
    </div>)
}

function App() {
    return (
        <div>
            <Route exact path="/" component={Homepage}/>
            <Route exact path="/hats" component={HatsPage}/>
        </div>
    );
}

export default App;
