export default (state = [], action) => { 
  switch (action.type) { 
    case 'FETCH_USER':
      // We would add the user to an existing array of blogs already
      return [...state, action.payload];
    default: 
      return state;
  }
};



