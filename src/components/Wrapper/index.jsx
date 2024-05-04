import './index.scss'
import React from 'react'
import LeftWrapper from '../LeftWrapper';
import MidleWrapper from '../MidleWrapper';
import RightWrapper from '../RightWrapper';

function Wrapper() {
    return (
        <div className='main__wrapper'>
            <LeftWrapper/>
            <MidleWrapper/>
            <RightWrapper/>
        </div>
    )
}

export default Wrapper