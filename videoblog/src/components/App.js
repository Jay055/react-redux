import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/Youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

// Declare API Key
const KEY = 'AIzaSyDx-Xp-M8TtHvc8omqXOPHGG49IU8uTFnY';


class App extends React.Component { 
  state = { video: [], selectedVideo: null };

  
 // Set a Default search term to avoid empty page
  componentDidMount() { 
    this.onTermSubmit('builing');
  }

// Send request on Form Submit
  onTermSubmit =  async  (term) => { 
    const response = await youtube.get('/search', {
      params: {
        part: 'snippet',
        type: 'video',
        maxResults: 15, 
        q: term,
        key: KEY
      }
    });  

 

 

    // Automatically change video display on search, selectedVideo
    this.setState({
      video: response.data.items,
      selectedVideo: response.data.items[0]
    });

  
  };
  
  //  Select and set Video state 
  onVideoSelect = (video) => { 
    this.setState({selectedVideo: video  })
  }


  render() {
    return (
      <div className="ui container"> 
        <SearchBar onFormSubmit={this.onTermSubmit} /> 
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              
        <VideoDetail video={this.state.selectedVideo} />
        </div>
        <div className="five wide column">
       <VideoList onVideoSelect={this.onVideoSelect}  videos={this.state.video} />
        </div>
        </div>
        </div>
        </div>
      )
  }

}


export default App;