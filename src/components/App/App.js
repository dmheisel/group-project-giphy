import React, { Component } from 'react';
import { HashRouter as Router, Route} from 'react-router-dom';
import Search from '../Search/Search';
import Favorites from '../Favorites/Favorites';

class App extends Component {

  render() {
    return (

      <Router>
        <div>
          <Route exact path='/' component={Search}/>
          <Route path='/favorites' component={Favorites}/>
        </div>
      </Router>
  
    );
  }
  
}

export default App;
