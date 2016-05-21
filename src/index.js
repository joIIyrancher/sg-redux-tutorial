// React is a JS library that is used to produce HTML that is shown to the user in a web browser
// JSX is a subset or dialect of JS that allows us to write HTML-like JS that are transpiled by webpack/babel to vanilla JS
// JSX makes the code more legible and clean to read
// ES6 comes with JS modules


// ES6 features: classes, fat arrow, export and import


// downwards dataflow: the most parent component should be responsible for fetching data

// throttling with lodash module; debounce

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBI2ENsNyavuOzQcZ9U6nlShKf1kaNSi2w';

// Create a new component. This component should produce some HTML 
// this creates a type or class to make more App instances

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };

    // initial search on starting of the app
    this.videoSearch('john oliver');
  }

  videoSearch(term) {
    // the search is not an instanteous operation but a network request
    YTSearch({key: API_KEY, term: term}, (videos) => {
      // this.setState({ videos })
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
      })
    })
  }

  render() {
  // throttle user search with lodash's debounce
  // debounce will execute the function after 300ms has elapsed 
  const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
  
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList  
          videos={this.state.videos}
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) } />
      </div>
    );
  }
}

// Take this component's generated HTML and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));


// import React, { Component } from 'react';

// export default class App extends Component {

// }