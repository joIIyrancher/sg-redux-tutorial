import React from 'react';
import VideoListItem from './video_list_item';

// in a functional-based component, props object is in the argument
// ie. 
// const VideoList = (props) => {}

// in a class-based component, props is accessible anywhere in the class by this.props

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag} 
        video={video} />
    )
  })

  return (
    <ul className="col-md-4 list-group">  
      {videoItems}
    </ul>
  )
}

export default VideoList;