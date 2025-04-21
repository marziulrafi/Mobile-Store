import React from 'react';
import { MdBookmarkAdd, MdShoppingCart } from "react-icons/md";
import { useLoaderData, useParams } from 'react-router';
import Buttons from '../components/ui/Buttons';

const MobileDetails = () => {
    
    const data = useLoaderData()
    const {id} = useParams()

    const singleMobile = data.find(mobile=>mobile.id===parseInt(id))

    const {
        name,
        image,
        brand,
        model,
        price,
        description,
        storage,
        camera_info
      } = singleMobile || {};
      

    return (
        <div className='w-full py-12'>
            <img src={image} alt="" className='w-full mx-auto md:w-auto mb-8' />

            <div className="flex justify-between">
                <h1 className='text-6xl font-thin mb-8'>{name}</h1>
                <div className='space-x-2'>
                    <Buttons label={<MdShoppingCart />}/>
                    <Buttons label={<MdBookmarkAdd />}/>
                </div>
            </div>


            <div>
                
            </div>
        </div>
    );
};

export default MobileDetails;