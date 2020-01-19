import { GET_USER } from './twitch.types';
import initialState from './twitch.state';

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USER:
      return {
        ...state,
        user: payload
      };
    default:
      return state;
  }
};
