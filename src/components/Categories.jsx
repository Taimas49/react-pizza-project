import React from 'react';
import PropTypes from 'prop-types';


// class Categories extends React.Component {
//   state = {
//     activeItem: null,
//     test: 123
//   };

//   onSelectItem = index => {
//     this.setState({
//       activeItem: index,
//     });
//   };

//   render() {
//     console.log(this.state)
//     const {items} = this.props;
//     return (
//       <div className="categories">
//           <ul>
//             <li className="active">Все</li>
//                 {items.map((name, index) =>
//               <li className={this.state.activeItem === index ? 'active' : ''} onClick={() => this.onSelectItem(index)} 
//               key={`${name}_${index}`}>{name}</li>)}
//           </ul>
//       </div>
//   );
//   }
// }

const Categories = React.memo(
  function Categories({ activeCategory, items, onClickCategories }) {

    // console.log(activeItem);
    return (
      <div className="categories">
        <ul>
          <li className={activeCategory === null ? 'active' : ''}
            onClick={() => { onClickCategories(null); }}>Все</li>
          {
            items && items.map((name, index) =>
              <li className={activeCategory === index ? 'active' : ''}
                onClick={() => onClickCategories(index)}
                key={`${name}_${index}`}>{name}</li>)
          }
        </ul>
      </div>
    );
  }
);


Categories.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  onClickCategories: PropTypes.func,
  activeCategory: PropTypes.number
};


export default Categories;
