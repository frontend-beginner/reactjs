import { SET_SPOTIFY } from '../actionConstants';
import { SpotifyType } from './models';

export interface SpotifyState {
  s: SpotifyType | null;
}

const spotifyState: SpotifyState = {
  s: null,
};

const reducer = (state = spotifyState, action: any): SpotifyState => {
  if (action.type === SET_SPOTIFY) {
    return { ...state, s: action.payload.spotify };
  } else {
    return state;
  }
};

export default reducer;
