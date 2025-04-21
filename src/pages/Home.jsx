import React, { useState } from 'react';
import Hero from '../components/Hero';
import MobileContainer from '../components/MobileContainer';
import { useLoaderData } from 'react-router';

const Home = () => {

    const data = useLoaderData()
    const [mobiles, setMobiles] = useState(data)
    const handleSearch = (e, text) => {
        e.prevenDeafult()
        if (text === '') return setMobiles(data)

        const searchedMobiles = data.filter(
            mobile =>
                mobile?.name?.toLowerCase().split(' ').includes(text.toLowerCase()) || mobile.brand?.toLowerCase().split(' ').includes(text.toLowerCase())
        )
        setMobiles(searchedMobiles);
    }

    return (
        <div>
            <Hero handleSearch={handleSearch} />
            <MobileContainer mobiles={mobiles} />
        </div>
    );
};

export default Home;