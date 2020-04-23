import React from "react";
import UserCreate from "./UserCreate";
import Context, { LanguageStore } from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";
import LanguageSelector from "./LanguageSelector";

class App extends React.Component {
  // Transferred all Logic to Language Store
  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector  />

          <ColorContext.Provider value="blue">
            <UserCreate />
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    );
  }
}

export default App;
