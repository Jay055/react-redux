import React from 'react'; 
import { connnet, connect } from 'react-redux';
import { createStream } from '../../actions';
// import helpers from reduce forms 
import { Field, reduxForm } from 'redux-form';
import { createPost } from '../../actions';


class StreamCreate extends React.Component { 
  renderError({ error, touched }) {
    if(touched && error) { 
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
          </div>
      );
    }
  }


  // destructed from formProps , meta props handles error
  renderInput=({ input, label, meta }) => { 
    const className =`field ${meta.error && meta.touched ? 'error': ''}`
    // console.log(meta);
    return (
    <div className={className}>
      <label>{label}</label>
      <input {...input} autoComplete="off" />
      {this.renderError(meta)}
    </div>
    )}
  

    onSubmit= (formValues)=> { 
      this.props.createStream(formValues)
      // console.log(formValues);
    }
  render() {
    // console.log(this.props);
  
  return (
    
    <form 
    onSubmit={this.props.handleSubmit(this.onSubmit)}
    className="ui form error">
      <Field name="title" component={this.renderInput} label="Enter Name" />
      <Field name="description" component={this.renderInput} label="Enter Description" />
      <button className="ui button primary">Submit</button>

    </form>
    )
}
}


// Validate Form 
const validate = (formValues) => {
  const errors = {};
  
  if(!formValues.title) { 
    errors.title = 'You must enter a title';
  }

    if(!formValues.description) { 
      errors.description = 'You must enter a description';
    }

    return errors;

}


const formWrapper =  reduxForm({ 
  form: 'nameStreamCreate',
  validate
}) (StreamCreate);

export default connect(null, { createStream })(formWrapper);