import React, { useState } from 'react';
import BannerImg from '../assets/banner.png'
import Buttons from './ui/Buttons';

const Hero = ({handleSearch}) => {

    const [searchText, setSearchText] = useState('')

    return (
        <div className='py-12'>
            <img src={BannerImg} alt="" className='w-full mx-auto md:max-w-md' />

            <div className='text-center space-y-4'>
                <h1 className='font-thin text-gray-900 text-7xl'>Browse, Search, View, Buy</h1>

                <p className='text-gray-500'>Best place to browse, search, view details and purchase of top flagship phones <br/>
                    of the current time - FlagshipFaceOff</p>

                <form onSubmit={e=>{
                    handleSearch(e, searchText)
                    setSearchText('') 
                }}
                className='flex flex-col md:flex-row justify-center items-center mb-4 md:px-24'>
                    <input className='bg-white border-gray-300 rounded shadow-md w-2/3 h-12 px-4 mb-3 md:mr-2 md:mb-0'
                    value={searchText} onChange={e=>setSearchText(e.target.value)}
                    type="text"
                    placeholder='Search mobiles by name' />
                    
                    <Buttons type='submit' label='Search'/>
                </form>
            </div>
        </div>

    );
};

export default Hero;