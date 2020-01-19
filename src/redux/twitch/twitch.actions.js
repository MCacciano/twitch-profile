import twitch from '../../axios/twitch';

import { GET_USER } from './twitch.types';

export const getUser = ({ name = '', id = '' }) => async dispatch => {
  const res = await twitch.get(`/users?login=${name}`);

  dispatch({
    type: GET_USER,
    payload: res.data.data[0]
  });
};
