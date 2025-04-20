import React from 'react';
import Hero from '../components/Hero';
import MobileContainer from '../components/MobileContainer';
import { useLoaderData } from 'react-router';

const Home = () => {

    const data = useLoaderData()
    return (
        <div>
            <Hero/>
            <MobileContainer mobiles = {data}/>
        </div>
    );
};

export default Home;