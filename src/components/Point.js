import React from 'react';
import Deleter from './Deleter';

const Point = ({item,deletePoint}) => {
    return(
        <React.Fragment>
            <li>{item}</li>
            <Deleter props={deletePoint}/>
        </React.Fragment>
    )
};

export default Point;