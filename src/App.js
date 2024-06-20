import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllProducts from './pages/AllProducts';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/product/:id" component={ProductPage} />
        <Route path="/" component={AllProducts} />
      </Switch>
    </Router>
  );
}

export default App;
