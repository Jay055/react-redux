const Button = ({color, text, backgroundColor, onClick}) => { 
    return ( 
      <button className= "btn" style = {{color : color, backgroundColor: backgroundColor}} onClick= {onClick} >{text} </button>
    )
}



Button.defaultProps = { 
  color : "blue", 
  text : "button", 
  backgroundColor: "red"
}

export default Button; 