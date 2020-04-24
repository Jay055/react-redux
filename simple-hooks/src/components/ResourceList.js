import React, { useState, useEffect } from 'react'
import axios from 'axios';



 // state = { resources: []};

  // if (prevProps.resource !== this.props.resource) {

  // async componentDidUpdate(prevProps) { 
//   if(prevProps.resource !== this.props.resource) { 
//     const response = await Axios.get(
//       `https://jsonplaceholder.typicode.com/${this.props.resource}`
//     );
//     this.setState({ resources: response.data})
//   }
// }

// Destructure resource from props.resource (App.js props)
const ResourceList = ({ resource }) => {  
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

    return (
      <ul>
        {resources.map(record =>
         <li key={record.id}>
           {record.title}
         </li>
        )}
      </ul>
    )
  }

export default ResourceList;