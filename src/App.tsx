import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Expenses from './Pages/Expense';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Pages/Login';

function App(): JSX.Element {
  return (
    <ChakraProvider>
      <Router>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/expenses">Expenses</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav> */}
        <Switch>
          <Route path="/expenses">
            <Expenses />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <div>Home</div>
          </Route>
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
