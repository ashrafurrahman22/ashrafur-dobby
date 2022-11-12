import React, { useEffect, useState } from 'react';
import SingleData from './SingleData';

const Data = () => {

    const [data, setData] = useState([]);

    useEffect( () =>{
        fetch("http://localhost:5000/data")
        .then(res=>res.json())
        .then(data => setData(data))
    } , [])

    return (
        <div>
            {
                data.map(singleData=> console.log(singleData.img)
                
                
                )
            }
        </div>
    );
};

export default Data;