import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => {
    return(
        <div>
            <Link to={'/'}>Создать пункт</Link>
            <Link to={'/list'}>Смотреть список</Link>
            <Link to={'/counter'}>Счётчик</Link>
        </div>
    )
};

export default Navigation;