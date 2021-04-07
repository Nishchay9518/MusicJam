import React from 'react';
import './VideoItem.css';

const Theme = () => {
    return(
        <div className="theme-switcher">
            <input type="checkbox" id="switcher"/>
            <label for="switcher">Switch</label>
        </div>
    )
}

export default Theme;

