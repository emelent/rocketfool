import types from '../types';

export const initialState = {
  loadingProfiles: false,
  profiles: null,
  creatingProfile: false,
  deletingProfile: false,
  loadingProfile: false,
  loadingProfilesFailed: false,
}

export default function(state=initialState, action){
  switch(action.type){
    case types.FETCH_PROFILES_PENDING:
      return {
        ...state,
        loadingProfiles: true
      };

    case types.FETCH_PROFILES_FULFILLED:
      return {
        ...state,
        loadingProfiles: false,
        profiles: action.payload,
      };

    case types.FETCH_PROFILES_REJECTED:
      return {
        ...state,
        loadingProfiles: false,
        loadingProfilesFailed: true,
      };
    
  };

  return state;
}

