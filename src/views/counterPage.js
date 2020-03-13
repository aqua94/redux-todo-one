import React from 'react';
import {connect} from 'react-redux';
import {makeCount} from '../store/actions/counterActions';

const counterPage = ({dispatch,count}) => {
    return(
        <div>
            <button onClick = {()=>dispatch(makeCount())}>count it</button>
            <div>{count}</div>
        </div>
    )
};

const mapStateToProps = ({secondReducer}) => {
    return {
        count: secondReducer.count
    };
};

export default connect(mapStateToProps)(counterPage);