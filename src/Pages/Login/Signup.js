import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const Signup = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [createUserWithEmailAndPassword, user2, loading2, error2] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  let signInError;

  if (user || user2) {
    navigate(from, { replace: true });
    console.log(user);
  }

  if (loading || updating || loading2) {
    return <Loading/>;
  }

  if (error || error2 || updateError) {
    signInError = (
      <p className="text-red-500">
        <small>
          {error?.message || error?.message || updateError?.message}
        </small>
      </p>
    );
  }

  const onSubmit = async (data) => {
    if(data.firstPassword !== data.password ){
      alert("password didn't match")
    }
    else{
      await createUserWithEmailAndPassword(data.email, data.password);
    }
    // await updateProfile({ displayName: data.name });
    // console.log("update done");
  };

    return (
      <div style={{
        fontFamily:"Montserrat"
    }} className='flex justify-center items-center py-14'>
        <div>
        <div className="card card-body text-black border border-black rounded shadow-sm w-96">
            <h1 className='font-semibold text-lg'>Create an account</h1>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
  <input className='border-b p-2 border-gray-400' placeholder='First Name' {...register("firstName")} />
  <input className='border-b p-2 border-gray-400' placeholder='Last Name' {...register("lastName")} />
  <input className='border-b p-2 border-gray-400' placeholder='Email' type="email" {...register("email")} required />
  <input className='border-b p-2 border-gray-400' placeholder='Password' type="password" {...register("firstPassword")} required />
  <input className='border-b p-2 border-gray-400' placeholder='Confirm Password' type="password" {...register("password")} required />
  
  {errors.password && <span>This field is required</span>}
  
  <input className='btn bg-blue-900 w-full mx-auto border-none normal-case font-light' type="submit" value="Create an account" />
</form>
        <h2 className='text-xs text-center pt-2'>Already have an account? <Link className='text-blue-700' to='/login'>Login</Link> </h2>
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

export default Signup;