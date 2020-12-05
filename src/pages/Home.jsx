/* eslint-disable babel/object-curly-spacing */
import React from 'react';
import { Categories, SortPopup, PizzaBlock, PizzaLoadingBlock } from '../components';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from '../redux/actions/filters';
import { fetchPizzas } from "../redux/actions/pizzas";

const categoryNames = [
  'Мясные',
  'Вегетарианская',
  'Гриль',
  'Острые',
  'Закрытые'
];
const sortItems = [
  { name: 'популярности', type: 'popular' },
  { name: 'цене', type: 'price' },
  { name: 'алфавиту', type: 'alphabet' },
];
function Home() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPizzas());

  }, []);

  const onSelectCategory = React.useCallback(index => {
    dispatch(setCategory(index));
  }, []);

  const { items, isLoaded } = useSelector((state) => {
    return {
      items: state.pizzas.items,
      isLoaded: state.pizzas.isLoaded
    };
  });

  console.log(items);
  console.log(isLoaded);

  return (
    <div className="container">
      <div className="content__top">
        <Categories onClickCategories={onSelectCategory} items={categoryNames}
        />
        <SortPopup onClickPopup={() => { }} sortLinks={sortItems}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">

        {
          // eslint-disable-next-line react/jsx-key
          isLoaded
            ? items.map((obj) => <PizzaBlock key={obj.id} {...obj} isLoading={true} />)
            : Array(10).fill(<PizzaLoadingBlock />)
        }

      </div>
    </div>
  );
}
Home.propTypes = {
  items: PropTypes.any
};
export default Home;
