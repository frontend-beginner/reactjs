import { ACCESS_TOKEN, REFRESH_TOKEN, REMOVE_TOKEN } from '../actionConstants';

const accessTokenAction = (accessToken: string) => ({
  type: ACCESS_TOKEN,
  payload: {
    accessToken,
  },
});

const refreshTokenAction = () => ({
  type: REFRESH_TOKEN
})

const removeTokenAction = () => ({
  type: REMOVE_TOKEN
})

export default { accessTokenAction, refreshTokenAction, removeTokenAction };

