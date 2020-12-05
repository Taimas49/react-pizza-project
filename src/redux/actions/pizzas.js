export const fetchPizzas = () => (dispatch) => {
    fetch('http://localhost:3001/pizzas')
    .then((response) => response.json())
    .then((json) => {
      dispatch(setPizzas(json));
    }
    );
};




export const setPizzas = (arr) => ({
    type: 'SET_PIZZAS',
    payload: arr
});

