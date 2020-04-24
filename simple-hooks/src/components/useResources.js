import axios from 'axios';
import { useState, useEffect } from 'react'


const useResources = (resource) => { 

  const [resources, setResources] = useState([]);

    const fetchResource = async resource => {

  const response = await axios.get(`http://jsonplaceholder.typicode.com/${resource}`);
  

  // this.setState({ resources: response.data });
  setResources(response.data);
};


// Combination fo componentDidMount and DidUpdate
useEffect(() => { 
  fetchResource(resource);
}, [resource])

return resources;



};

export default useResources;