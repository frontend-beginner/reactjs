import { SET_SPOTIFY } from '../actionConstants';
import { SpotifyType } from './models';

const setSpotify = (spotify: SpotifyType) => ({
  type: SET_SPOTIFY,
  payload: { spotify },
});

export default { setSpotify };
