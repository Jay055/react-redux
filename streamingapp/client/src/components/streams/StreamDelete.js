import React, { Fragment } from 'react'; 
import { connect } from 'react-redux';
import Modal from '../Modal';
import history from '../../history';
import { fetchStream, deleteStream } from '../../actions';
import { Link } from 'react-router-dom';



class StreamDelete extends React.Component {   
  componentDidMount() { 
   this.props.fetchStream(this.props.match.params.id);
  }

  
// ON Delete Click
onSubmit = (id) => { 
  // console.log(formValues);
  this.props.deleteStream(this.props.match.params.id);
}



  renderActions() {
    return  ( 
      <Fragment> 
        <button 
        onClick={this.onSubmit}
        className="ui button negative">Delete</button>
        <Link 
        to='/'
        className="ui button">Cancel</Link>
      </Fragment>
    );
    }

    renderContent() { 
      if (!this.props.streams) { 
        return 'Are you sure you want to delete this stream?'

      }
      return `Are you sure you want to delete this stream with title ${this.props.streams.title}`;

    }


  render() {

    return (
    
        <Modal 
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
        />
    
    )
  }
  }



  const mapStateToProps = (state, ownProps ) => { 
    // console.log(ownProps); Stream with the Id 
    return { streams: state.streams[ownProps.match.params.id] };
  }

export default connect(mapStateToProps, {fetchStream, deleteStream})(StreamDelete);






 
// render() {
//   if (!this.props.streams) {
//     return <div> Loading... </div>
//   }
//   const {title, description} = this.props.streams;
//   return ( 
// <div> 
//   <h3> Edit a Stream </h3>
//   {/* Initial Values coming from the form field names */}
//   <StreamForm 
//   initialValues={{title, description}}
//   onSubmit={this.onSubmit} /> 
// </div>
//   )
// }
// }