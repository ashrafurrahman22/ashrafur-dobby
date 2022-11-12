import React from 'react';

const SingleData = ({SingleData}) => {
    const { email, phone, firstName, lastName} = SingleData;

    const name = firstName + " " + lastName;
//    const navigate = useNavigate();

//    const navigateToFoodDetails = id =>{
//        navigate(`/food/${id}`);
//    }
    return (
        <div 
        // onClick={() => navigateToFoodDetails(food._id)}
        className='card card-body bg-base-200 cursor-pointer shadow-md text-center'>
            <img className='p-4' src={name} alt="" />
            <h2 className='font-semibold'>{name}</h2>
            <h2 className='font-light text-sm'>{email}</h2>
            <h2 className='font-semibold'>{phone}</h2>
        </div>
    );
};

export default SingleData;