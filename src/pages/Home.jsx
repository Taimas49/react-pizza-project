/* eslint-disable babel/object-curly-spacing */
import React from 'react';
import { Categories, SortPopup, PizzaBlock, PizzaLoadingBlock } from '../components';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from "../redux/actions/pizzas";

const categoryNames = [
  'Мясные',
  'Вегетарианская',
  'Гриль',
  'Острые',
  'Закрытые'
];
const sortItems = [
  { name: 'популярности', type: 'popular', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавиту', type: 'name', order: 'asc' },
];
function Home() {
  const dispatch = useDispatch();
  const { items, isLoaded, } = useSelector((state) => {
    return {
      items: state.pizzas.items,
      isLoaded: state.pizzas.isLoaded
    };
  });

  const { category, sortBy } = useSelector((state) => {
    return {
      category: state.filters.category,
      sortBy: state.filters.sortBy
    };
  });

  React.useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [category, sortBy]);

  const onSelectCategory = React.useCallback(index => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = React.useCallback(type => {
    dispatch(setSortBy(type));
  }, []);


  return (
    <div className="container">
      <div className="content__top">
        <Categories activeCategory={category} onClickCategories={onSelectCategory} items={categoryNames}
        />
        <SortPopup onClickSortType={onSelectSortType} activeSortType={sortBy.type} onClickPopup={() => { }} sortLinks={sortItems}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">

        {
          // eslint-disable-next-line react/jsx-key
          isLoaded
            ? items.map((obj) => <PizzaBlock key={obj.id} {...obj} isLoading={true} />)
            : Array(10).fill(0).map((loader, index) => {
              return <PizzaLoadingBlock key={`${loader}__${index}`} />;
            })
        }

      </div>
    </div>
  );
}
Home.propTypes = {
  items: PropTypes.any
};
export default Home;
