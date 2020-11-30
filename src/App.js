/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import {Route} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {Header} from './components';
import {Home, Cart} from './pages';
import setPizzas from "./redux/actions/pizzas";


function App () {

  const dispatch = useDispatch();

  React.useEffect(() => {
      fetch('http://localhost:3001/pizzas')
    .then((response) => response.json())
    .then((json) => {
      dispatch(setPizzas(json));
    });
  },[]);

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