/* eslint-disable babel/object-curly-spacing */
import React from 'react';
import { Categories, SortPopup, PizzaBlock } from '../components';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from '../redux/actions/filters';

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

  const onSelectCategory = React.useCallback(index => {
    dispatch(setCategory(index));
  }, []);


  const { items } = useSelector((state) => {
    return {
      items: state.pizzas.items
    };
  });

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
          items && items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)
        }
      </div>
    </div>
  );
}
Home.propTypes = {
  items: PropTypes.any
};
export default Home;
