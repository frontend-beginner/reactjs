import React from 'react';
import { Button } from 'antd';
import { accessUrl } from 'src/utils/spotify';

const Login: React.FC<any> = () => {
  return (
    <div className='login-layout'>
      <Button type='link' href={accessUrl} className='login-btn'>
        Login
      </Button>
    </div>
  );
};

export default Login;
