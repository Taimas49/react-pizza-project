import React, { useState } from 'react';
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

const Categories = React.memo(function Categories({ items, onClickCategories }) {

  const [activeItem, setActiveItem] = useState(null);

  const onSelectItem = (index) => {
    setActiveItem(index);
    onClickCategories(index);
  };


  // console.log(activeItem);
  return (
    <div className="categories">
      <ul>
        <li className={activeItem === null ? 'active' : ''}
          onClick={() => { onSelectItem(null); }}>Все</li>
        {
          items && items.map((name, index) =>
            <li className={activeItem === index ? 'active' : ''}
              onClick={() => onSelectItem(index)}
              key={`${name}_${index}`}>{name}</li>)
        }
      </ul>
    </div>
  );
}
);


Categories.propTypes = {
  items: PropTypes.node,
  onClickCategories: PropTypes.func
};


export default Categories;
