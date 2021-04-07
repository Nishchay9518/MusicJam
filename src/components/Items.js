import React from 'react';
import './VideoItem.css';

const Items = ({ video , onVideoSelect }) => {
    return (
        <div onClick = {() => onVideoSelect(video)} className="video item">
            <img alt={video.snippet.title} className="ui image " src={video.snippet.thumbnails.medium.url} />
            <div className="content">
                <div className="list-text">
                    {video.snippet.title.replace(/&amp;/g, '&').replace(/&#39;/g, ' ')}
                </div>
            </div>
        </div>
    );
};

export default Items;