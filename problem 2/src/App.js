import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllProducts from './pages/AllProducts';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={AllProducts} />
          <Route path="/product/:id" component={ProductPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
