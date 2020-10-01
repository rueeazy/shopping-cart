import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './components/Home';
import Shop from './components/Shop';
import './styles/reset.css';
import './styles/main.css';

const App = () => {
    return (
        <Router>
            <div className="app">
                <Nav />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/shop" component={Shop} />
                </Switch>
            </div>
        </Router>
        
    )
}

export default App