/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import {Route} from 'react-router-dom';
import {Header} from './components';
import {Home, Cart} from './pages';


function App () {

  return (
    <body>
      <div className="wrapper">
      <Header />
        <div className="content">
          <Route path='/' component={Home} exact/>
          <Route path='/cart' component={Cart} exact/>
        </div>
      </div>
    </body>
    
    );
}




export default App;