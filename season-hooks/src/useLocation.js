import { useState, useEffect } from 'react'; 

export default () => {

  const [ lat, setLatitute] = useState(null);
  const [ errorMessage, setErrorMessage] = useState('');
  
  
  
  
  useEffect(() => { 
    window.navigator.geolocation.getCurrentPosition(
    position => setLatitute(position.coords.latitude),
    err => setErrorMessage(err.message)
  );
  }, []); 

  return [lat, errorMessage];
  
}
