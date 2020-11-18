import React from 'react';
import { Categories, SortPopup, PizzaBlock } from '../components';
import PropTypes from 'prop-types';


function Home({ items }) {
  console.log(items);
  return (
    <div className="container">
      <div className="content__top">
        <Categories onClickCategories={(name) => console.log(name)} items={[
          'Мясные',
          'Вегетарианская',
          'Гриль',
          'Острые',
          'Закрытые'
        ]} />
        <SortPopup onClickPopup={() => { }} sortLinks={[
          'популярности',
          'цене',
          'алфавиту',
        ]} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {
          // eslint-disable-next-line react/jsx-key
          items.map(() => <PizzaBlock />)
        }
      </div>
    </div>
  );
}
Home.propTypes = {
  items: PropTypes.any
};
export default Home;
