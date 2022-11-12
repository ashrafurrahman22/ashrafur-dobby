import React from 'react';
import { useForm } from 'react-hook-form';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const Login = () => {

    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let signInError;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if(user || user1){
        navigate(from, { replace: true });
        console.log(user);
      }

    if (loading || loading1 ) {
        return <Loading></Loading>
    }

    if(error || error1){
        signInError= <p className='text-red-500'><small>{error?.message || error1?.message }</small></p>
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    }

    return (
      <div style={{
        fontFamily:"Montserrat"
    }} className='flex justify-center items-center py-14'>
        <div>
        <div className="card card-body text-black border border-black rounded shadow-sm w-96">
            <h1 className='font-semibold text-lg'>Login</h1>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
  <input className='border-b p-2 border-gray-400' placeholder='Email' type="email" {...register("email")} />
  <input className='border-b p-2 border-gray-400' placeholder='Password' type='password' {...register("password")} />
  
  {errors.password && <span>This field is required</span>}
  
  <input className='btn bg-blue-900 w-full mx-auto border-none normal-case font-light' type="submit" value="Login" />
</form>
        <h2 className='text-xs text-center pt-2'>Don't have an account? <Link className='text-blue-700' to='/signup'>Signup</Link> </h2>
        </div>
        <div className="divider">or</div>

        {/* <div className='border border-gray-400 rounded-full flex px-10 justify-center items-center'>
            <img className='w-12 p-2' src="https://www.freeiconspng.com/uploads/facebook-png-icon-follow-us-facebook-1.png" alt="" />
            <p className='text-center'>Continue with Facebook</p>
        </div> */}
        <div onClick={() => signInWithGoogle()} className='border cursor-pointer border-gray-400 rounded-full mt-3 flex justify-center px-10 items-center'>
            <img className='w-12 p-2' src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt="" />
            <p>Continue with Google</p>
        </div>
        </div>
    </div>
    );
};

export default Login;