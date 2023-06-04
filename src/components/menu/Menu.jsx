import React from 'react';
import "./menu.css"

function Menu(props) {
    return (
        <div>

            <nav>
                <div className='logo'>B-hitech</div>
                <div className='line'>
                    <div className='line1'></div>
                    <div className='line2'></div>
                    <div className='line3'></div>
                </div>
                <div className='links'>
                    <div className='bull-link'>
                        <div className='bull'></div>
                        <p className='link'>Home</p>
                    </div>

                    <div className='bull-link'>
                        <div className='bull'></div>
                        <p className='link'>About</p>
                    </div>

                    <div className='bull-link'>
                        <div className='bull'></div>
                        <p className='link'>Contact</p>
                    </div>

                    <div className='bull-link'>
                        <div className='bull'></div>
                        <p className='link'>Portofolio</p>
                    </div>
                    
                </div>
            </nav>
        </div>
    );
}

export default Menu;