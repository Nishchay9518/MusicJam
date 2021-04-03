import React from 'react';
import Items from'./Items';

const VideoList = ({videos , onVideoSelect}) =>{
   const renderList = videos.map((video) => {
        return <Items key = {video.id.videoId} onVideoSelect ={onVideoSelect} video ={video}/>;
   });
   
    return (
        <div className ="ui relaxed divided list">
           {renderList}
        </div>);

};

export default VideoList;