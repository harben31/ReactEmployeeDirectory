import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './componants/pages/Home';
import Search from './componants/pages/Search';
// import Browse from './componants/pages/Browse';
import NavBar from './componants/NavBar';

function App() {
    return(
        <Router>
            <div>
                <NavBar/>
                <Route exact path='/' component={Home} />
                <Route exact path='/search' component={Search} />
                {/* <Route exact path='/browse' component={Browse} /> */}
            </div>
        </Router>
    );
};

export default App;