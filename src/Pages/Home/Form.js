import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';

const Form = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
      console.log(data)
      axios.post('http://localhost:5000/upload', data)
      .then(response =>{
        const {data} = response;
        console.log(response);
          if(data.status){
          reset();
          toast.success('Successfully submitted 👍');
          }
      });
    };

    return (
      <div style={{
        fontFamily:"Montserrat"
    }} className='flex justify-center items-center py-14'>
        <div>
        <div className="card card-body text-black border border-black rounded shadow-sm w-96">
            <h1 className='font-semibold text-lg'>Upload</h1>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
        <label for="myfile">Name:</label>
  <input className='border-b p-2 border-gray-400' placeholder='Name' type="text" {...register("name")} />
  
  <label for="myfile">Select a file:</label>
<input type="file" id="file" {...register("fileName")}></input>

  <input className='btn bg-blue-900 w-full mx-auto border-none normal-case font-light' type="submit" value="Upload" />
</form>
        </div>
        </div>
      </div>
    );
};

export default Form;