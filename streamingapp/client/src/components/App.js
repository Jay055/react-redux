import React from 'react'; 
import { Router, Route } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import StreamDelete from './streams/StreamDelete';
import Header from './Header';
import history from '../history';


//BrowserRouter = Router so we handle history ourselves 

const App = () => { 
  // The exact param disables partial matching of routes; renders route is it's exclusively called 
  return (
  <div className="ui container">
   
{/* Place browser history , change BrowserRouter to Router*/}
    <Router history={history}>
      <div>
        <Header />
        <Route path="/" exact component={StreamList} />
        <Route path="/streams/new" exact component={StreamCreate} />
        {/* :id to accept URL routes with IDs */}
        <Route path="/streams/edit/:id" exact component={StreamEdit} />
        <Route path="/streams/delete/:id" exact component={StreamDelete} />
        <Route path="/streams/show" exact component={StreamShow} />
       
        
      </div>
    </Router>
     </div>
  );
}








export default App; 