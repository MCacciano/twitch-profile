import twitch from '../../axios/twitch';

import { GET_USER, GET_USER_FOLLOWS, GET_USER_VIDEOS, GET_USER_CLIPS } from './twitch.types';

export const getUser = ({ name = '', id = '' }) => async dispatch => {
  const res = await twitch.get(`/users?login=${name}`);

  dispatch({
    type: GET_USER,
    payload: res.data.data[0]
  });
};

export const getUserFollows = userID => async dispatch => {
  const res = await twitch.get(`/users/follows?to_id=${userID}`);

  dispatch({
    type: GET_USER_FOLLOWS,
    payload: res.data
  });
};

export const getUserVideos = userID => async dispatch => {
  const res = await twitch.get(`/videos?user_id=${userID}&first=100`);

  dispatch({
    type: GET_USER_VIDEOS,
    payload: res.data
  });
};

export const getUserClips = userID => async (dispatch, getState) => {
  const res = await twitch.get(`/clips?broadcaster_id=${userID}&first=100`);

  if (getState().clips && getState().clips.pagination.cursor !== res.data.pagination.curosr) {
    const { cursor } = res.data.pagination;

    const resMore = await twitch.get(`/clips?broadcaster_id=${userID}&after=${cursor}&first=100`);
  } else {
    console.log('less than 100 clips');
  }

  dispatch({
    type: GET_USER_CLIPS,
    payload: res.data
  });
};
