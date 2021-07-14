import Header from './components/Header'
import './App.css';
import Tasks from './components/Tasks'

function App() {
  return (
    <div container>

    <Header title = "passed in props" /> 
    <Tasks /> 
    </div> 
  );
}

export default App;
