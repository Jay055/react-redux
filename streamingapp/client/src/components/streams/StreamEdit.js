import React from 'react'; 
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions'; 
import StreamForm from './StreamForm';

// Make each Component to work in Isolation (fetch its data)

class  StreamEdit extends React.Component { 
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);

  };

  

  
// ON Edit Click
  onSubmit = (formValues) => { 
    // console.log(formValues);
    this.props.editStream(this.props.match.params.id, formValues);
  }

  render() {
    if (!this.props.streams) {
      return <div> Loading... </div>
    }
    const {title, description} = this.props.streams;
    return ( 
  <div> 
    <h3> Edit a Stream </h3>
    {/* Initial Values coming from the form field names */}
    <StreamForm 
    initialValues={{title, description}}
    onSubmit={this.onSubmit} /> 
  </div>
    )
}
}




// ownProps reference  to the StreamEdit props 
const mapStateToProps = (state, ownProps ) => { 
  // console.log(ownProps); Stream with the Id 
  return { streams: state.streams[ownProps.match.params.id] };
}

export default connect(mapStateToProps, {fetchStream, editStream})(StreamEdit);


