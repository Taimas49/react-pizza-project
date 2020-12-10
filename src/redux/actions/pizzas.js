export const fetchPizzas = (sortBy, category) => (dispatch) => {

  console.log(sortBy, category);
  
  dispatch(setLoaded(false));
    fetch(`http://localhost:3001/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`)
    .then((response) => response.json())
    .then((json) => {
      dispatch(setPizzas(json));
    }
    );
};

export const setLoaded = (value) => {
  return({
    type: 'SET_LOADED',
    payload: value
  });
};


export const setPizzas = (arr) => ({
    type: 'SET_PIZZAS',
    payload: arr
});

