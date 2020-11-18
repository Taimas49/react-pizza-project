/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import {Route} from 'react-router-dom';
import {Header} from './components';
import {Home, Cart} from './pages';


function App() {

    const [pizzas, setPizzas] = useState([]);
  
  
    useEffect(() => {
    fetch('http://localhost:3000/db.json')
    .then((response) => response.json())
    .then((json) => {
      setPizzas(json.pizzas);
    });

  },[]);
  
  return (
  <body>
    <div className="wrapper">
     <Header />
      <div className="content">
        <Route path='/' render={() => <Home items={pizzas}/>} exact/>
        <Route path='/cart' component={Cart} exact/>
      </div>
    </div>
  </body>
  );
}
  
export default App;