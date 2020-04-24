import React, { useState, useEffect } from 'react'
import axios from 'axios';
<<<<<<< HEAD
import useResources from './useResources';
=======
>>>>>>> dca08546df51df1bca915602867dbd601b6b2aa0



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
<<<<<<< HEAD



const ResourceList = ({ resource }) => {  
 const resources = useResources(resource);
  

=======
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
>>>>>>> dca08546df51df1bca915602867dbd601b6b2aa0

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