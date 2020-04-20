import React from 'react'; 
import { connect } from 'react-redux'; 
//
import { Link } from 'react-router-dom';

import { fetchStreams } from '../../actions'; 

// Class to call Streams 
class StreamList extends React.Component { 
  componentDidMount() { 
    this.props.fetchStreams();
  }

  //Edit and Delete streams
  renderAdmin(stream) { 
    if(stream.userId === this.props.currentUserId) { 
      return(
         <div className="right floated content">
           <button className="ui button primary">
             Edit 
             </button> 
             <button className="ui button negative">
              Delete
             </button>
          </div>
      )}
  }


  renderList() { 
    return this.props.streams.map(streams => { 
      return (
        <div className="item" key={streams.id}>
             {this.renderAdmin(streams)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            {streams.title}
          <div className="description">{streams.description}</div>
          </div>
       
        </div>
      )
    });
    
  }


  // Create Streams 
  renderCreate() { 
    if (this.props.isSigned) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Link to="/streams/new" className="ui button primary">
            Create Stream 
          </Link>
        </div>
      )

    }
  }



  render() { 
    // console.log(this.props.streams);
    return(
       <div>
         <h2> Streams </h2>
         <div className="ui celled list">{this.renderList()}
         {this.renderCreate()}
         </div>
        </div>
           )}
}

// Object.value: turns all value inside an object into an array. 
const mapStateToProps = (state) => { 
  return { 
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSigned: state.auth.isSignedIn
  };

}


export default connect(mapStateToProps, { fetchStreams }) (StreamList);