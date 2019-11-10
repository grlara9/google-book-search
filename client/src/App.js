import React from 'react';
//import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Nava from "./components/nav/navbar";
import './App.css';

function App() {
  return (
    
    <div>
      <Nava />
      <Router>
          <Container>
        
            <Switch>
              <Route exact path="/" component={Search} />
              <Route path="/bookshelf" component={Saved} />
              <Route exact path="/books/:id" component={null} />
              <Route component={null} />
            </Switch>
          </Container>
        </Router>  
    </div>
  
  );
}

export default App;
