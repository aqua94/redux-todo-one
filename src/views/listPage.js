import React from 'react';
import Point from '../components/Point';
import {connect} from 'react-redux';
import {deletePoint} from '../store/actions/actions';

const listPage = ({list,dispatch}) => {
    return(
        <div>
            <ul>
                {list.map((item,index) => 
                    <Point item ={item} key={index} deletePoint = {()=>dispatch(deletePoint(index,list))}/>)}
            </ul>
        </div>
    )
};

const mapStateToProps = ({firstReducer}) => {
    return {
        list: firstReducer.list
    };
};

export default connect(mapStateToProps)(listPage);