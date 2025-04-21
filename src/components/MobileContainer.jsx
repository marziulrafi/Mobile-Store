import React, { useEffect, useState } from 'react';
import MobileCards from './MobileCards';
import Buttons from './ui/Buttons';

const MobileContainer = ({ mobiles }) => {

    const [displayMobiles, setDisplayMobiles] = useState([])
    const [showAll, setShowAll] = useState(false)
    useEffect(() => {
        if (showAll) {
            setDisplayMobiles(mobiles)
        } else {
            setDisplayMobiles(mobiles.slice(0, 6))
        }
    }, [mobiles, showAll])
    return (
        <div className='py-12'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8'>
                {
                    displayMobiles.map(mobile => (
                        <MobileCards key={mobile.id} mobile={mobile} />
                    ))
                }
            </div>
            <Buttons
                type='submit'
                onClick={() => {
                    setShowAll(prv => !prv)
                    if (showAll) window.scrollTo(0, 500)
                }}
                label={showAll ? 'Show Less' : 'Show All'}
            />
        </div>
    );
};

export default MobileContainer;