import React from 'react'; 


class ImageCard extends React.Component{
  // Create REF
  constructor(props) { 
    super(props);
    this.state = { spans: 0 }
  
    this.imageRef = React.createRef(); 
  }
  
  componentDidMount() { 
    this.imageRef.current.addEventListener('load', this.setSpan);
    // console.log(this.imageRef.current.height);
  }
  setSpan= ()=> {
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 10);

    this.setState ({spans})
    console.log(this.imageRef.current.height);
  };

  render() { 
    const {src, alt} = this.props;  
    return ( 
      <div 
      style = {{ gridRowEnd: `span ${this.state.spans }` }} >
      <img ref={this.imageRef} src={this.props.src} alt={this.props.alt}/>
    </div>
      )
  }

}






export default ImageCard; 