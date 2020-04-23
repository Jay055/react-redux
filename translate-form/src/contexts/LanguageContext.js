import React from "react";

// We can include a default value in the context English then connect to our nexted children

// console.log(React.createContext('english'));
const Context = React.createContext("english");

export class LanguageStore extends React.Component {
  state = { language: "english" };

 onLanguageChange = (language) => {
    this.setState({ language });
  };

  render() {
    return (
// Create a Provider to pass the values we would need in other components 
      <Context.Provider
        value={{ ...this.state, onLanguageChange: this.onLanguageChange }} >
          {this.props.children}
      </Context.Provider>
    );
  }
}


export default Context;
