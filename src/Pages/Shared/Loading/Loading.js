import React from 'react';

const Loading = () => {
    return (
        
        <div className="min-h-screen flex flex-col gap-5 items-center justify-center ">
        <div className="w-20 h-20 border-b-2 border-gray-900 rounded-full animate-spin"></div>
        <h2 className='text-xl font-semibold' >Loading....</h2>
        </div>
    );
};

export default Loading;