import React from 'react';

function Header(props) {
    return (
        <div className='mt-3'>
            <h2 className='text-center'>{props.title}</h2>
            <p className='text-center'>{props.subtitle}</p>
        </div>
    );
}

export default Header;