import { GET_USER, GET_USER_FOLLOWS, GET_USER_VIDEOS, GET_USER_CLIPS } from './twitch.types';
import initialState from './twitch.state';

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USER:
      return {
        ...state,
        user: payload
      };
    case GET_USER_FOLLOWS:
      return {
        ...state,
        follows: payload
      };
    case GET_USER_VIDEOS:
      return {
        ...state,
        videos: payload
      };
    case GET_USER_CLIPS:
      return {
        ...state,
        clips: payload
      };
    default:
      return state;
  }
};
