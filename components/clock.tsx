'use client';

import Clock from 'react-live-clock';  

export default function ClockWrapper() {
    return (
        <Clock 
            className='text-[8vw] leading-none'
            format={'h:mm A'}
            timezone={'Europe/Berlin'}
            ticking={true}
        />
    );
}   