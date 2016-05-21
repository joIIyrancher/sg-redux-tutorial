import React from 'react';

// const VideoListItem = (props) => {
//   const video = props.video;
//
// }
// the above is another way of writing:

// const VideoListItem = ({video}) => {}
// its saying that the argument has a property video. Its saying to
// grab that property video and declare a new variable video and assign
// the property to the variable


// before writing a new component, ask this:
// do I expect this component to need to maintain any type of state?

const VideoListItem = ({video, onVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.default.url;
  const title = video.snippet.title;

  return (
    <li onClick={() => onVideoSelect(video) } className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>

        <div className="media-body">
          <div className="media-heading">
            <h6>{title}</h6>
          </div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;