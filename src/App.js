import React, {useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './components/Home';
import Shop from './components/Shop';
import Products from './products.json';
import './styles/reset.css';
import './styles/main.css';

const App = () => {
    const [products, setProducts] = useState(Products)

    const updateProducts = (product, n) => {
        setProducts([...products].map(object => {
            if(object.id === product && (object.amount + n >= 0)) {
                return {
                    ...object,
                    amount: object.amount + n
                }
            }
            else return object;
        }))
    }

    return (
        <div className="app">
            <Router basename ={process.env.PUBLIC_URL}>
                    <Nav />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/shop" 
                            render={props => <Shop {...props} 
                            products={products}
                            updateProducts={updateProducts}
                            />} />
                    </Switch>
            </Router>

        </div>
        
    )
}

export default App