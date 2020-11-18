import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Button = ({onClick, className, outline, children}) => {
    return(
    <button
        onClick={onClick}
        className={classNames('button', className, {
            'button--outline': outline
            })}>{children}
    </button>);
};
// fetch('https://jsonplaceholder.typicode.com/todos/1');


// const getResource = async (url) => {
//     const res = await fetch(url);
//     if (!res.ok) {
//         throw new Error(`НЕ получилось, не фортануло статус: ${res.status}`);
//     }
//     const some = await res.json();
//     return some;
// };

// getResource('https://jsonplaceholder.typicode.com/todos/111111')
// .then((res) => console.log('Success', res))
//     .catch(error => console.error(`Случилась ошибка ${error}`));



Button.propTypes = {
    onClick: PropTypes.any,
    className: PropTypes.any,
    outline: PropTypes.any,
    children: PropTypes.any
};

export default Button;