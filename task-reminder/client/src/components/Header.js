// import PropTypes from 'prop-types';
import Button from "./Button";
import AddTask from "./AddTask";
const Header = ({ title, onSubmit }) => {
  //  
  const onClick = () => { 
    console.log('clicked')
  }

  return (
    <header>
      <h1> {title} </h1>
      <Button
        text="Add"
        color="light-blue"
        backgroundColor="light-blue"
        onClick = {onClick}
      ></Button>
      <AddTask onSubmit = {onSubmit}/> 
      {/* inline style */}
      {/* <h1 style= {{color: 'red', backgroundColor:'blue'}}></h1> */}
    </header>
  );
};

//  We can initiate defaalut props

Header.defaultProps = {
  title: "Task Tracker",
};

//  Prop Types to make code more roboust
// Header.propTypes = {
//   title: PropTypes.string.isRequired
// }

export default Header;
