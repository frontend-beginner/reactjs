import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/store';

import { UserActions } from 'src/store/actions';

const Default: React.FC<any> = () => {
  const user = useSelector((state: RootState) => state.user.item);
  const loading = useSelector((state: RootState) => state.user.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(UserActions.getMeAction());
  }, [dispatch]);

  console.log(user);
  return (
    <div>
      <pre>{loading ? 'loading...' : user?.display_name}</pre>
    </div>
  );
};

export default Default;
