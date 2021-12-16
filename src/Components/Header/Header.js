import React from 'react';
import './Header.scss'

const Header = () => {
    return (
        <div>
            <h3>Header Section</h3>
            <div className='first-box'>
                <h4>Box 1</h4>
            </div>
            <div className='second-box'>
                <h4>Box 2</h4>
            </div>
            <div className='third-box'>
                <h4>Box 3</h4>
            </div>
            <div className='fourth-box'>
                <h4>Box 4</h4>
            </div>
        </div>
    );
};

export default Header;