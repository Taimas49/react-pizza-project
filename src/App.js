/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import {Route} from 'react-router-dom';
import { connect } from 'react-redux';
import {Header} from './components';
import {Home, Cart} from './pages';
import setPizzas from "./redux/actions/pizzas";

// function App() {
    
//     useEffect(() => {
//     fetch('http://localhost:3000/db.json')
//     .then((response) => response.json())
//     .then((json) => {
//       setPizzas(json.pizzas);
//     });

//   },[]); 
  
// }
  
class App extends React.Component {

  componentDidMount() {
    fetch('http://localhost:3000/db.json')
    .then((response) => response.json())
    .then((json) => {
      console.log(json.pizzas);
      this.props.setPizzas(json.pizzas);
    });
  }

  render() {
    console.log(this.props);

    return (

    <body>
      <div className="wrapper">
      <Header />
        <div className="content">
          <Route path='/' render={() => <Home items={this.props.items}/>} exact/>
          <Route path='/cart' component={Cart} exact/>
        </div>
      </div>
    </body>
    
    );
  
  }
}



const mapStateToProps = (state) =>  {
    return {
      items: state.pizzas.items,
      filters: state.filters
    };
};


const mapDispatchToProps = dispatch => {
  return {
    setPizzas: (items) => dispatch(setPizzas(items)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);