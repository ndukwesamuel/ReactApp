import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';

import BlogList from './Page/BlogList';
import Create from './Page/Create';
import Home from './Page/Home';
import Update from './Page/Update';










function App() {
  return(
    <Router>
    <div className="App">
       <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/blogs/:id">
            <BlogList />
          </Route>

          <Route path="/create">
              <Create />
            </Route>

            <Route path="/update/:id">
              <Update />
            </Route>


        </Switch>
      </div>
    </div>
  </Router>
  )
}

export default App;
