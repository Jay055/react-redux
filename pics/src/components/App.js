
import React from 'react';
// import axios from 'axios';
import unsplash from '../api/Unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


// const App = () => {
  class App extends React.Component {
    state = { images: [] };
    // Create an onSubmit function to be passed to Searchbar.js
     onSearchSubmit = async  (term) =>  {
       // axios.get > unsplash.get, baseURL!
    const response =  await unsplash.get('/search/photos', {
        params: { query: term },
        
      } );
      console.log(this);
      this.setState({ images: response.data.results});
    }

    render() {
  return(
    <div className="ui container" style={{ marginTop: '10px'}}> 
      <SearchBar onSubmit={this.onSearchSubmit} />
     <ImageList images={this.state.images} />
       </div>
  )
}
  }


export default App;

