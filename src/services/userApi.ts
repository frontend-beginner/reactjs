import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { SpotifyType } from 'src/store/models';

const s = useSelector<RootState, SpotifyType | null>(
  (state) => state.spotify.s
);

console.log(s);

const getMyProfile = useMemo(() => () => s?.getMe(), [s]);

const getUser = useMemo(() => (userId: string) => s?.getUser(userId), [s]);

export default { getMyProfile, getUser };
