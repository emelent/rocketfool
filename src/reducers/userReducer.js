const initialState = {
  fetching: false,
  fetched: false,
  user: {
    id: null,
    name: null, 
    age: null
  },
  users: [],
  error: null
};

export default function(state=initialState,  action){
  switch(action.type){
    case 'FETCH_USERS_PENDING':
      return {
        ...state, 
        fetching: true
      };
      break;

    case 'FETCH_USERS_REJECTED':
      return {
        ...state, 
        fetching: false, 
        error: action.payload
      };
      break;
    
    case 'FETCH_USERS_FULFILLED':
      return {
        ...state, 
        fetching: false, 
        fetched: true, 
        users: action.payload
      };
      break;

    case 'FETCH_USER_FULFILLED':
      return{
        ...state,
        fetching: false,
        fetched: true,
        user: action.payload
      };
  }

  return state;
};
