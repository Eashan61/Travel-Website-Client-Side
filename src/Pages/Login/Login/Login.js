import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
 const {signInUsingGoogle} = useAuth();
 const location = useLocation();
 const history = useHistory();
 const redirect = location.state?.from || '/home';

 const googleLogin = () => {
  signInUsingGoogle()
  .then(result => {
   history.push(redirect);
  })
 }
 return (
  <div>
   <h2>Please Login</h2>
   <button onClick={googleLogin} className="btn btn-danger">Google Sign In</button>
  </div>
 );
};

export default Login;