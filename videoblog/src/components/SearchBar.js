import React from 'react'; 
// import { isCompComponent } from 'react-dom/test-utils';

// Set state term 
class SearchBar extends React.Component { 
  state = { term: ''};


  // Set term state as input value
  onInputChange =(event) => {
    this.setState({ term: event.target.value });

  };
  
  // Call props onFormSubmit from App.js
  onFormSubmit = (e) => { 
    e.preventDefault();
    this.props.onFormSubmit(this.state.term);
   
  }

  render() {
    return(
     <div className="search-bar ui segment">
       <form onSubmit={this.onFormSubmit} className="ui form">
       <div className="field">
        <label>Video Search</label>
        <input onChange={this.onInputChange} value={this.state.term} type="text" />
       </div>
       </form>
     </div> 
    )
  }


}


export default SearchBar;